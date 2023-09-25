import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function ViewUser() {
  const [data, setData] = useState([]);
  const id = useParams().id;
  const getUserUrl = "http://localhost:8081/viewUser/" + id;
  useEffect(() => {
    axios
      .get(getUserUrl)
      .then((res) => {
        setData(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="d-flex bg-dark vh-100 w-100 justify-content-center align-items-center">
        <div className="w-25 vh-50">
          <h3 className="text-light">View User</h3>
          <table className="table table-dark">
            <tbody>
              <tr>
                <td>ID</td>
                <td>{data.id}</td>
              </tr>
              <tr>
                <td>Name</td>
                <td>{data.name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{data.email}</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-5">
            <Link className="btn btn-primary m-1" to="/">
              Back
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewUser;
