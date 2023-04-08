# API 201
## Callback functions were once a common way to handle asynchronous code

### Snippets
```javascript
// 1st one
// // without a callback, asynchronous code has unexpected results
// var shoppingList = ['apples', 'biscuits', 'cabbage'];

// function addItem(item) {
//   setTimeout(() => {
//     shoppingList.push(item);
//     console.log("Item added to shopping list");
//   }, 200);
// }

// function getAllItems() {
//   setTimeout(() => {
//     console.log('Shopping List Items:');
//     console.log(shoppingList);
//   }, 100);
// }

// addItem('dip');
// getAllItems();

// 2nd one
// callback functions can help us deal with asynchronous code but it can also get messy if we have multiple sequential callbacks (not shown here)
var shoppingList = ['apples', 'biscuits', 'cabbage'];

function addItem(item, callback) {
  setTimeout(() => {
    shoppingList.push(item);
    console.log("Item added to shopping list");
    callback();
  }, 200);
}

function getAllItems() {
  setTimeout(() => {
    console.log('Shopping List Items:');
    console.log(shoppingList);
  }, 100);
}

addItem('dip', getAllItems);
```

00:24 - https://gist.github.com/samuraijane/a5d5dbc363e000ca761e878ac0619d13
06:40 - https://gist.github.com/samuraijane/0052949441e3ade7e6400eb4e58bf858