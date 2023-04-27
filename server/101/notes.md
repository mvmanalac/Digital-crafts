# Server 101
## We use the `express` library to build servers

### Steps to build a simple server
Follow these steps in the project root folder
- `npm init -y`
- `npm i express`
- `npm i -D nodemon`
- `touch server.js`
- add the code to build a server (see **demo/**)
- `npx nodemon server.js` 
<!-- ^starts the server -->

### To create an endpoint, here's an example (in server.js):

const express = require('express');

const server = express();

const port = 3333;
<!-- sets the port -->

server.get('/heartbeat', (req, res) => {
    res.json('heartbeat')
});

server.listen(port, () => {
    console.log(`listening on ${port}`)
});

