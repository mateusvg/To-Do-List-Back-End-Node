const mysql = require('mysql')

//DB CONNECTION
const conn = mysql.createPool({
    host: '',
    user: '',
    password: '',
    database: '',
    multipleStatements: true
});

module.exports = conn
