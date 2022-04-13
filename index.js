// First steps install dependencies: npm i express cors mysql
const express = require('express')
const cors = require('cors');
const TodoModel = require('./model/TodoListModel');

// Starting my app.
const app = express();
app.use(express.json())

// Permission to enable CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE,PATCH');
    app.use(cors());
    next();
});

app.get("/", function(req, res, next) {
    TodoModel.getIndex(req, res, function(erro, retorno) {})
})

app.get('/todolist', function(req, res) {
    TodoModel.getTodoList(req, res)
});

app.post('/submitmessage', function(req, res) {
    if (!req.body) {
        console.log("Sem requisição");
    } else {
        console.log("Corpo requisição enviada")
        TodoModel.insertTodoList(req, res)
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});