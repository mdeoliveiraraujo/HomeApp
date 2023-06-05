const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors);
app.use(express.json());

app.get('/', (req, res) => {
    res.send('heyaaaaaaaaa');
})

app.post('/', (req, res) => {
    let data = req.body;
    console.log('req ', req)
    res.send("YO I GOT SOMETHING")
})

app.listen(port, () => {
    console.log('Servidor Online.')
})