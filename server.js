'use strict'

const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.set('port', port)

app.get('/', (req, res) => {
    res.send('<h1>Welcome home</h1>')
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})