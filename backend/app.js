const express = require('express');
// const cors = require('cors');
const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'HOMEAPP'
})

const app = express();
const port = 3000;

// app.use(cors);
app.use(express.json());

// app.use(cors({
//     origin: 'http://localhost:4200',
//   'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   }));

app.get('/', (req, res) => {
    console.log('got a GET');
    con.query('SELECT * FROM shopping_list', (err, result) => {
        res.send(result);
    })
})

app.post('/', (req, res) => {
    let data = req.body;
    console.log('req ', req)
    res.send("YO I GOT SOMETHING")
})

app.listen(port, () => {
    console.log('Servidor Online.')
})