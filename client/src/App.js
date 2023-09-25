import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./UserComponents/Home";
import AddUser from "./UserComponents/AddUser";
import ViewUser from "./UserComponents/ViewUser";
import UpdateUser from "./UserComponents/UpdateUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/addUser" element={<AddUser></AddUser>}></Route>
          <Route path="/viewUser/:id" element={<ViewUser></ViewUser>}></Route>
          <Route path="/deleteUser/:id" element={<Home></Home>}></Route>
          <Route
            path="/updateUser/:id"
            element={<UpdateUser></UpdateUser>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
