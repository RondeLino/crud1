const express = require("express");

const server = express();

server.use(express.json());

const users = ["Conquer", "Akira2", "TheKillerMaN"];

// Retorna um usuário
server.get("/users/:index", (req, res) => {
  const { index } = req.params;

  return res.json(users[index]);
});

// Retornar todos os usuários
server.get("/users", (req, res) => {
  return res.json(users);
});

// Criar um novo usuário
server.post("/users", (req, res) => {
  const { name } = req.body;
  users.push(name);

  return res.json(users);
});

// Atualiza um usuário
server.put("/users/:index", (req, res) => {
  const { index } = req.params;
  const { name } = req.body;
  users[index] = name;
  return res.json(users);
});

//Deleta um usuário
server.delete("/users/:index", (req, res) => {
  const { index } = req.params;
  users.splice(index, 1);

  return res.json({ message: "O usuário foi deletado com sucesso!" });
});
server.listen(3000);
