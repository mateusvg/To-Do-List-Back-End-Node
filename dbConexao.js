const mysql = require('mysql')

//DB CONNECTION
const conn = mysql.createPool({
    host: 'us-cdbr-east-04.cleardb.com',
    user: 'bb3bd2b935de69',
    password: 'fb7aa1ef',
    database: 'heroku_fb1e780812f7b81',
    multipleStatements: true
});

module.exports = conn