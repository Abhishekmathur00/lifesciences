import mysql from 'mysql2';

// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'medicamenlifesciences'
});

export default connection;