const conn = require('../dbConexao')

module.exports = class TodoModel {

    static getIndex(req, res) {
        return res.send('Hello World!');
    }

    static getTodoList(req, res) {
        return conn.query('SELECT * FROM todolist ORDER BY idtodolist ASC', function(error, results) {
            if (error) throw error;
            res.send(results)
        });
    }

    static insertTodoList(req, res) {
        let { title, description, date } = req.body;
        return conn.query(`INSERT INTO todolist ( title, description, date) VALUES (?, ?, ?)`, [title, description, date], function(err) {
            if (err)
                console.log(err)
            res.status(200).send("Resposta ok")
        });
    }

}