# NodeJS 105
## **pacakage.json** manages third-party modules found at [npm's repository](https://www.npmjs.com/)

### What is npm?
[Docs](https://nodejs.org/eng/knowledge/getting-started/npm/what-is-npm)
- it is an online repository for the publishing of open-source Node.js projects
- it is a command-line utility for interacting with said repository that aids in package installation, version management, and dependency management

### Open-source software
- free to use as per a specific license
- developers are not compensated
- not guaranteed to work at all times

### Synonyms
- library
- module
- package
- dependency

For example, see "cowsay" https://www.npmjs.com/package/cowsay

### npm commands
- `nmps - v` (version)
- `npm install -g <someModule>` (global install, not recommended)
- `npm install <someModule>` (local install, preferred)
- `npm init -y` (creates **pacakage.json** with default values)

### package.json
- "dependencies" list production libraries
- "devDependencies" list the libraries used to write the code itself
- is created by `npm init-y`
- determines the contents of **node_modules**

### node_modules
- contains all third-party modules installed with `npm`
- each module has its own **package.json** so this directory can be quite large
- do not ever modify the cod ein this directory

### Executing commands (if applicable)
using `cowsay` as an example
- node_modules/.bin/cowsay JavaScript FTW!
- npx cowsay JavaScript FTW! (npx is same as above)

```
 _________________
< JavaScript FTW! >
 -----------------
        \   ^__^
         \  (oo)\_______    
            (__)\       )\/\
                ||----w |   
                ||     ||   
```
- node_modules/.bin/cowthink node.js is cool
- npx cowthink node.js is cool
 _________________
< node.js is cool >
 -----------------
        \   ^__^
         \  (oo)\_______    
            (__)\       )\/\
                ||----w |   
                ||     ||   
```