# NodeJS 201
## define nps scripts for greater efficiency

### scripts live in package.json
```json
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1"
},
```
### we can easily add new scripts
```json
  "scripts": {
    "cowsay1": "node_modules/.bin/cowsay JavaScript FTW!",
    "cowsay2": "npx cowsay JavaScript FTW!",
    "dev": "nodemon server.js",
    "start": "node server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
### execute scripts from the CLI (terminal)
- `npm run dev`
- `npm run start`
- etc...

<!-- When you're developing, you want it to run with nodemon, but once it's deployed and in the cloud, you want it to be on node -->