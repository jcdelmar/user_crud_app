import mysql from "mysql";
import cors from "cors";
import express from "express";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "sample",
});

app.listen(8081, () => {
  console.log("Server is listening...");
});

app.get("/getAllUsers", (req, res) => {
  const sql = "SELECT * FROM USERS";
  db.query(sql, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

app.get("/viewUser/:id", (req, res) => {
  const sql = "SELECT * FROM users WHERE id = ?";
  db.query(sql, [req.params.id], (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

app.post("/addUser", (req, res) => {
  const sql = "INSERT INTO users (name, email) VALUES (?)";
  const values = [req.body.name, req.body.email];
  db.query(sql, [values], (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

app.delete("/deleteUser/:id", (req, res) => {
  const sql = "DELETE FROM users WHERE id = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  const sql = "UPDATE users SET name = ? , email = ? WHERE id = ?";
  const values = [req.body.name, req.body.email, id];
  db.query(sql, values, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});
