const express = require("express");
const cors = require("cors");

const { getTodos, createTodos, updateTodo, deleteTodo } = require("./controllers/Todo");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Let's build a CRUD API!");
});

app.get('/todos', getTodos);

app.post('/todos', createTodos);

app.put('/todos/:todoID', updateTodo);

app.delete('/todos/:todoID', deleteTodo);

module.exports = app;