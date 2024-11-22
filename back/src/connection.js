// Importa o módulo mysql2/promise
const mysql = require('mysql2/promise');

// Cria uma conexão com o banco de dados
const connection = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'crud_2042_3'
});

// Exporta a conexão
module.exports = connection;
