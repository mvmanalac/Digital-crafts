# DOM 102
## Modifying the DOM comes down to learning a few methods and properties.

## Creating Elements
```javascript
// document.createElement('div') is just an element. We need to cache it (see below) so we can see it work in VSC.
const div = document.createElement('div');
div.innerText = 'Hello World';
div.innerHTML = `<h1>Hello World</h1>`; // you have to use backtics for innerHTML, can't use quote. This would populate 'Hello World' instead of `<h1>Hello World</h1>`
root.append(div);
```

### Selecting Elements
```javascript
// returns a list of nodes. You can check this on the console tab of "inspect element"
document.getElementsByTagName('p');
document.getElementsByClassName('section-content'); // this is for a class name. it'll show everything that's 'section-content'
document.querySelectorAll('article.section-content'); // this shows everything in 'article' in 'section-content'

//returns a single node
document.getElementByID('root'); // this will always be singular.
document.getquerySelector('article #root');

```

## Modifying Elements
```javascript
const root = document.getElementById('root');
root.setAttribute('data-id', 'someId');
root.style.color = 'crimson'
root.innerText = 'Some new text here';
root.removeAttribute('data-id');

```

Example:
const div = document.createElement('div');
div.innerText = 'Hello World';
<!-- these 2 lines above are equivalent to this one line below -->
<div>Hello World</div> // this inherently have a lot of keys without values.

Misc Notes:
You *cannot* modify an element without cache-ing it. Look at example above.