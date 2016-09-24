'use strict'

const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.set('port', port);

// Middlewares 
app.use(express.static('./public'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('home')
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});