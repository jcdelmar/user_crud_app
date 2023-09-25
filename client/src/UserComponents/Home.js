import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

function Home() {
  const getDataUrl = "http://localhost:8081/getAllUsers";
  const deleteUserUrl = "http://localhost:8081/deleteUser/";
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(getDataUrl)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(deleteUserUrl + id)
      .then((res) => {
        console.log("Delete Successful.");
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="d-flex bg-dark vh-100 w-100 justify-content-center align-items-center">
        <div className="w-75 vh-50">
          <h3 className="text-light">User List</h3>
          <div className="d-flex justify-content-end">
            <Link className="btn btn-success m-3" to="/addUser">
              + Add User
            </Link>
          </div>
          <table className="table table-dark">
            <thead>
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {data.map((user, ndx) => {
                return (
                  <tr key={ndx}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <Link
                        className="btn btn-primary text-light m-1"
                        to={`/viewUser/${user.id}`}
                      >
                        View
                      </Link>
                      <Link
                        className="btn btn-warning text-dark m-1"
                        to={`/updateUser/${user.id}`}
                      >
                        Update
                      </Link>
                      <Link
                        className="btn btn-danger m-1"
                        onClick={() => {
                          handleDelete(user.id);
                        }}
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Home;
