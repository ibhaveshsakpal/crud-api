const Todo = require("../model/Todo");

const getTodos = (req, res) => {
    Todo.find((err, todos) => {
        if (err) {
            res.send(err);
        }
        res.json(todos);
    });
};

const createTodos = (req, res) => {
    const todo = new Todo({
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed
    })

    todo.save((err, todo) => {
        if (err) {
            res.send(errr)
        }
        res.json(todo);
    })
}

const updateTodo = (req, res) => {
    Todo.findByIdAndUpdate(
        { _id: req.params.todoID },
        {
            $set: {
                title: req.body.title,
                description: req.body.description,
                completed: req.body.completed
            },
        },
        { new: true },
        (err, Todo) => {
            if (err) {
                res.send(err);
            } else {
                res.json(Todo);
            }
        }
    )
}

const deleteTodo = (req, res) => {
    Todo.findOneAndDelete({ _id: req.params.todoID })
        .then(() => res.json({ message: "Todo Deleted!" }))
        .catch((err) => res.send(err));
}

module.exports = {
    getTodos,
    createTodos,
    updateTodo,
    deleteTodo
}