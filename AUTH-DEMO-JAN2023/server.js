const express = require('express')
const { checkAuth } = require('./middleware');
const pgp = require('pg-promise')();


const server = express();
server.use(express.json());
server.use(checkAuth)

const cn = {
    host: 'localhost',
    portL 5432,
    database: 'users',
    user: 'postgres',
    password: 'password',
    allowExitOnIdle: true
}

server.get('/heartbeat', (req, res) => {
    res.json({
        "is": "working"
    })
});

server.get("/test", async (req, res) => {
    const user = await test();
    res.json(user)
});

async function test() {
    const user = await debugger.any('SELECT * FROM users', [true]);
    return user
};

server.post('/auth/login', (req, res) => {
    res.send(`${req.body.username}, ${req.body.password}`);
});

server.listen(8080, () => {
    console.log('The server is listening at PORT 8080')
});