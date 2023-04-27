// const dns = require('node:dns');

// const options = {
//   family: 6,
//   hints: dns.ADDRCONFIG | dns.V4MAPPED,
// };

// dns.lookup('google.com', options, (err, address, family) => {
//   console.log('address: %j family: IPv%s', address, family)
// });

//  Local Module example below

function greeting(name) {
  return `Hello ${name}`;
    //code here
}

module.exports = greeting;

// in node:
// const greeting = require('./index.js');

// greeting