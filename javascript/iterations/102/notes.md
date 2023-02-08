# Iterations 102
## Declaratively looping over arrays.

### Terms
**declarative programming**
Hides the execution steps taken to achieve a result- the WHAT is more important than the HOW.

**method**
A function available to a specific data type (e.g. string) or a collection (e.g. array).

### Methods
In each of the methods below, we provide a callback function for at least one argument

**`.forEach`**
Executes logic on each item of an array. The return value is `undefined`.
```javascript
const list = ['apples', 'rice', 'soup'];
list.forEach(function(item, index) {
    console.log(`Item ${index + 1} is ${item}`);
});
// Methods live on objects or classes. List is not an object or a class, but it inherits from the array class. The reason we use methods even though it's not an object or a class is because it inherits from the array class.
// You can go to MDN reduce
```
```
const button = document.getElementById(`btn`);
button.addEventListener('click', function(event) {
    // some logic
    const target = event.target; 
});

function addEventListener(type, fn) {
    // does some logic
    // define event = {};
    fn(event)
}
```


**`.map`**
Returns a new array that manipulates each item of the array on which it is called in some way
```javascript
const list = ['a', 'b', 'c'];
const newList = list.map(function(item, index) {
    return item.toUpperCase();
});
```


**`.filter`**
Returns a new array that is a subset of items of the array on which it is called. 
```javascript
const list = [1, 2, 3, 4];
const evens = list.filter(function(item, index) {
    return item %2 === 0;
});

```


**`.reduce`**
Returns a single combined value which aggregates the items of the array on which is it is called in some way.
```javascript
const list = [1, 2, 3, 4];
const total = list.reduce(function(sum, item) {
    return sum + item 
}, 0) //0 is the 2nd argument here
```

let total = 0;

total += someArray[i]


