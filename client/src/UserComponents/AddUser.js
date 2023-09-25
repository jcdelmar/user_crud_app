import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function AddUser() {
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  const addUserUrl = "http://localhost:8081/addUser";
  const navigate = useNavigate();

  const handleSubmit = () => {
    axios
      .post(addUserUrl, data)
      .then((res) => {
        console.log("Added Successfully.");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="d-flex bg-dark vh-100 w-100 justify-content-center align-items-center">
        <div className="w-50 vh-50">
          <div className=""></div>
          <h3 className="text-light">Add User</h3>

          <form className="form">
            <div className="">
              <label className="text-light">Name: </label>
              <input
                className="form-control"
                placeholder="Enter name"
                onChange={(event) => {
                  setData({ ...data, name: event.target.value });
                }}
              />
            </div>

            <div className="mt-3">
              <label className="text-light">Email: </label>
              <input
                className="form-control"
                placeholder="Enter email"
                onChange={(event) => {
                  setData({ ...data, email: event.target.value });
                }}
              />
            </div>
          </form>
          <div className="mt-5">
            <Link className="btn btn-primary m-1" to="/">
              Back
            </Link>
            <button className="btn btn-success m-2" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddUser;
