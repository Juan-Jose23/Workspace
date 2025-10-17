const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'notas'
});
connection.connect(err => {
    if (err) throw err;
    console.log('Conectado ala base de datos MYSQL');
});


module.exports = connection;