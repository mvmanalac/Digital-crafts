# API 102
## Promises allow users to keep using a site while data from somewhere else is gathered in the background

## Terms
**`async`/`await`**
The most recent way to implement a promise. It is fairly easy to read and reason about. 

**callback funtions**
Before promises were a thing, we used callback functions to handle asynchronous code. Callback functions were a headache if we ever needed to call asynchronous logic sequentially. This was known as callback hell.

**promise**
A promise returns a response but we cannot control or predict when this happens. In dev speak, we say that a function returns a promise when the function has asynchronous logic that other code depends upon before it can be executed. Think of when you request to see your balance at a bank. You have to wait for code from the bank's server before finding out your own balance.


**`Promise`**
A class made avaialble by JavaScript. We use an instance of this class to wrap asynchronous code.
