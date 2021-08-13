// REQURE
const express = require('express');
const path = require('path');

const app = express();

// VARS
const port = 3000;

// ROUTES
app.get('/', (req, res) => {
    res.send('Hello, world!');
})

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>')
})

app.get('/users/:name', (req, res) => {
    let user = req.params.name
    res.send('<h1>'+user+'</h1>')
})

// LISTEN
app.listen(port, () => console.log(`listening on port ${port}`))