const express = require('express')
// ^brings express into memory

const server = express();
//^instantiates express, so that we now have access to built-in modules

server.get('/', (req, res) => {
    res.json({ message: "Hello World."});
    res.send('Hello Universe.');
});

server.listen(8080, () => {
    console.log('The server is running at PORT 8080');
})
//^ server.listen(whereThePortRuns, theCallBackFunction)

// in Terminal: node server.js should return "The server is running at PORT _____"

function someFn() {
    // code here
    return someValue;
    //  ^everything is ignored below this bc return statement closes the function
}