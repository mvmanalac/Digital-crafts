# JavaScript Data 202
## The syntax to read data depends on the data type or the data collection in which data types are found. 


## indices
We use an index to read data from an array 
'''
const shoppingList = ['apples', 'celery', 'bread'];
console.log(shoppingList[0]); // --> apples
'''


## objects
We use bracket notation or dot notation to read data.
'''
const car {
    {
        color: 'green',
        mileage: 67302,
        isNew: false
    };
console.log(car['mileage']) // --> 67302
console.log(car.mileage) // --> 67302
'''

# JavaScript considers arrays to be objects. So the shopping list above looks like this to JavaScript. 
# Neat trick, if you hit alt and click it gives you multiple cursors for editing

const shoppingList = {
    0: 'apples', 
    1: 'celery', 
    2: 'bread';
};

## SVGStringList, boolean, and numbers
Refer to the variable name to read the data. 
'''
const name = 'Paul';
console.log(Paul); // --> Paul
'''