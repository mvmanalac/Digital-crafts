# JavaScript Data 301
## Understanding immutability comes down to understanding how data is stored in memory.Data

**Definition of Immutability**
Primitive data types are immutable. Immutability means that whenever a variable is declared, it lives at a unique address in memory and if it is later re-initialized (e.g. re-assigned), it will live at a new, unique address. 
If a variable is initialized by reference, instead of by value, its unique address points to the referred address. 
* strings 
* booleans 
* numbers 
* null 
* undefined 

What does immutable mean? It means, you can't keep the same value with the same name and the same address.

** Example (on node)
S1 let age = 32;
    type age, it'll say 32
S2 let marysAge = age;
    type age, it'll say 32
S3 age = 33;
    type age, it'll say 33
S4 marysAge 
    type marys age, it'll say 32

Explanation: 

let age = 32; // initializes by value, it gets a unique address (e.g. Hx78)
let marysAge = age; initializes by reference, it gets a unique address (e.g. Rw33) but this address doesn't hold a value, it simply points to Hx78 
so when age = 33 // with reinitialization the new value is stored at a new address (e.g. Xa15)

**Definition of Mutability**
Collections of primitive data types are mutable, which means that when they are modified or updated, the data is not stored at a new address but remains at the original address when the variable was first declared. 
(These are not data types, but a collection of datat types)

* arrays 
* objects 


const car = {
    color: 'green',
    mileage: 67302,
    isNew: false
};

marysCar

let shoppingList = ['apples', 'celery, 'bread']; \\ immutable
let shoppingListCopy = shoppingList 
shoppingListCopy.push('blueberries') 
shoppingListCopy = ['milk']
