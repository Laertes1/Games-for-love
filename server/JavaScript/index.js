"use strict";
/*-----conexão com o banco de dados e com o express-----*/
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "crudgames",
});

app.use(cors());
app.use(express.json());

/*-----Inserir dados Na tabela-----*/
app.post("/register", (req, res) => {
  const { name } = req.body;
  const { cost } = req.body;
  const { category } = req.body;

  let SQL = "insert into games(nome, cost, category) values (?,?,?)";

  db.query(SQL, [name, cost, category], (err, result) => {
    if (err) console.log(err);
  });
});
/*-----Puxar todos os dados da tabela-----*/
app.get("/getCards", (req, res) => {
  let SQL = "SELECT * FROM games";

  db.query(SQL, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});
/*-----Update-----*/
app.put("/edit", (req, res) => {
  const { id } = req.body;
  const { name } = req.body;
  const { cost } = req.body;
  const { category } = req.body;

  let SQL = "UPDATE games SET nome=?,cost=?, category=? WHERE idgames=?";
  db.query(SQL, [name, cost, category, id], (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});
/*-----Delete-----*/
app.delete("/delete/:id", ( req , res) => {
  const { id } = req.params;

  let SQL = "DELETE FROM games WHERE idgames = ?";

  db.query(SQL, [id], (result, err) => {
    if (err) console.log(err);
    else res.send(result);
  });
});
/*-----Conexão com a porta-----*/
const port = 3009;
app.listen(port, () => {
  console.log("Servidor rodando na porta" + ` ${port}` + "!");
});
