const express = require('express')
const { checkAuth } = require('./middleware');

const server = express();
server.use(express.json());
server.use(checkAuth)


server.get('/heartbeat', (req, res) => {
    res.json({
        "is": "working"
    })
});

server.post('/auth/login', (req, res) => {
    res.send(`${req.body.username}, ${req.body.password}`);
});

server.listen(8080, () => {
    console.log('The server is listening at PORT 8080')
});