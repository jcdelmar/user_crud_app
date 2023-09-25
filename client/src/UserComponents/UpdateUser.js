import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

function UpdateUser() {
  const id = useParams().id;
  const [data, setData] = useState({
    id: id,
    name: "",
    email: "",
  });
  const navigate = useNavigate();
  const getUserUrl = "http://localhost:8081/viewUser/" + id;
  const updateUserUrl = "http://localhost:8081/updateUser/" + id;

  useEffect(() => {
    axios
      .get(getUserUrl)
      .then((res) => {
        setData(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = () => {
    axios
      .put(updateUserUrl, data)
      .then((res) => {
        console.log("Updated Successfully.");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="d-flex bg-dark vh-100 w-100 justify-content-center align-items-center">
        <div className="w-25 vh-50">
          <div className=""></div>
          <h3 className="text-light">Update User</h3>

          <form className="form">
            <div className="mt-3">
              <label className="text-light">ID: </label>
              <input className="form-control" value={data.id} disabled />
            </div>
            <div className="mt-3">
              <label className="text-light">Name: </label>
              <input
                className="form-control"
                value={data.name}
                onChange={(event) => {
                  setData({ ...data, name: event.target.value });
                }}
              />
            </div>

            <div className="mt-3">
              <label className="text-light">Email: </label>
              <input
                className="form-control"
                value={data.email}
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
            <button className="btn btn-warning m-2" onClick={handleEdit}>
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateUser;
