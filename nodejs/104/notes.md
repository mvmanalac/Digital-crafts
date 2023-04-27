# NodeJS 104
## Modules make it easier to scale and maintain Node applications

### Modules
- compartmentalize code
- act as building blocks in an application
- adhere to an import-export pattern

### Types
- core (Core modules are modules that already come in the box with node installed)
- local (Modules that we define as a developer)
- third-party (Modules that we find at NPM, for example: npmjs.com)

### Import
```javascript
const someModule = require('someModule');
```



### Export
```javascript
function someFunction() {
    //code here
}

module.exports = someFunction;
```