// First steps install dependencies: npm i express cors mysql
const express = require('express')
const mysql = require('mysql');
const cors = require('cors');

//DB CONNECTION
const conn = mysql.createPool({
    host: 'us-cdbr-east-04.cleardb.com',
    user: 'bb3bd2b935de69',
    password: 'fb7aa1ef',
    database: 'heroku_fb1e780812f7b81',
    multipleStatements: true
});

// Starting my app.
const app = express();
app.use(express.json())

// Permission to enable CORS
app.use((req, res, next) => {
    //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
    //Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE,PATCH');
    app.use(cors());
    next();
});

// GET from the first page, to check if NODE.js server is ON and runing
app.get('/', function(req, res) {
    res.send('Hello World!');
});

// Creating a GET route that returns data from the 'messages' table.
app.get('/todolist', function(req, res) {
    // Connecting to the database.
    // Executing the MySQL query (select all data from the 'Messages' table).
    conn.query('SELECT * FROM todolist ORDER BY idtodolist ASC', function(error, results, fields) {
        // If some error occurs, we throw an error.
        if (error) throw error;
        // Getting the 'response' from the database and sending it to our route. This is were the data is.
        res.send(results)
    });
});


// Starting our server.
// In local host the server uses port: "3000", if we deploy the aplication, server will use port: "process.env.PORT"
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});