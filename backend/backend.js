const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('heyaaaaaaaaa');
})

app.post('/', (req, res) => {
    let data = req.body;
    console.log('req ', req)
    res.send("YO I GOT SOMETHING")
})

app.listen(port, () => {
    console.log('something happeningggg')
})