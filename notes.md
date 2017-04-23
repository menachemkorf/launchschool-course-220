# Object Oriented Javascript
## Object Creation Methods
- object factories
  - A function that returns an object
  - the properties that differ from object to object are passed in to the function as parametures

Objects:

- organize related data and code together.
- are useful when a program needs more than one instance of something.
- become more useful as the codebase size increases.

## Global Object

you can delete global variables that you don't define, but not those that you did (var, function).

## Execution Context
In Javascript, the `this` keyword is a local variable that's bound to the 'context object', which is based on how the function/method was executed,

if there is no explicit caller the execution context is automaticaly the global (window)  object. there are a couple of ways to change that:
- calling the function as a property of an object - `obj.method()`
- using `call` - `func.call(obj)`
- using `apply` - `func.apply(obj)`
- binding a function to a context will create a new function where `this` is permanently bound to it - `var newFunction = func.bind(obj)`

### JavaScript has first-class functions, which means that functions can be:

- added to objects and executed in their contexts
- taken out of their objects, passed around and executed in entirely different contexts
- not bound to an object initially, but dynamically given a context in which to execute

### Higher Order Functions

functions that either accept a function as an argument or return a function.

## Context Loss
There are three common ways a functions context gets lost:
- When taken out of the object
  - `var func = obj.method` where `obj.method` has a reference to `this`
  - to fix this:
    - you can either use `call`, `apply`, or `bind`.
    - or if you can modify the function you can allow it to take an extra parameture, and refer to context parameture instead of `this`, and when you call the function you pass i `this` as the last argument.
Internal functions
- a function that's inside a method, and gets called by that method, if you refer to `this` inside the function it won't refer to the object, but to the global object.
  - to fix this:
    - you can use the ways we described above.
    - in the outer function you can assign `this` to a variable, and call that variable in the inner function
Function as Argument:
- A function thats passed into another function - `forEach` takes a function etc.
  - to fix this:
    - you can use the ways we described above.

## Partial function application
a process by which a function is invoked with some of its arguments at one time and the rest at a later time. The arguments passed earlier are stored and used later when the remaining arguments are provided.

## Closures

- JavaScript functions create closures when they are invoked.
- Closures allow code within a function to access any variable that was accessible at the time the function was declared.
- Values that are no longer accessible from anywhere in the code will be garbage collected and any memory they were using can then be used by other parts of the program.
- Closures can be used to make variables "private" to a function or set of functions and inaccessible from anywhere else.
- Closures allow functions to "carry around" values for later use.
- Higher-order functions are functions that take a function as an argument, return a function, or both.

# DOM

The DOM is javascripts representation of the webpage, it looks at it as a hierarchy of nodes, a node can be an element, a comment, plain text, or other types,

## Node Properties

- `nodeName`    // uppercase tag name, "P" for the p tag, (#text for a text node).n
- `nodeType`    // integer, 1 for element, 3 for text, etc.
- `nodeValue`   // null for element, content for text (or `data`)
- `textContent` // the text of all the inner nodes (not the actual tags)

`nodeValue` is called on a text node, while `textContent` is called on an element node.

## Traversing the DOM

- `firstChild`
- `lastChild`
- `childNodes`  // an array of all child nodes

- `nextSibling`
- `previousSibling`
- `parentNode`

## Getting and Setting Attributes

- `getAttribute(name)`
- `setAttribute(name, newValue)`
- `hasAttribute(name)`  // boolean

- `id`
- `name`
- `title`
- `value`

- `className` // a string with all the class names on the element

- `classList` has the following mathods:
    - `add(name)`
    - `remove(name)`
    - `toggle(name)`
    - `contains(name)`
    - `length`

- `style` // the `CSSStyleDeclaration` object which contains all the css properties available on the element, even if it's not set.

    - `style.color = 'red';`
    - `style.lineHeight = '3em';` // camelCase

## Walk method

```
function walk(node, callback) {
  callback(node);

  for (var i = 0; i < node.childNodes.length; i++) {
    walk(node.childNodes[i], callback);
  }
}
```

## Creating and Moving DOM Nodes

### create nodes

- document.createElement(tagName) // A new Element node
- document.createTextNode(text)   // A new Text node
- node.cloneNode(deepClone)       // Returns a copy of node

### add nodes

- parent.appendChild(node)
- parent.insertBefore(node, targetNode)
- parent.replaceChild(node, targetNode)

- element.insertAdjacentElement(position, newElement)
- element.insertAdjacentText(position, text)
    - position can be "beforebegin", "afterbegin", "beforeend", "afterend"




## Adding Event Listeners

1. Identify the event you are interested in.
2. Identify what element the event will occur on.
3. Define a Function that should be called when this event occurs.
4. Register the Function as an event listener.

## Event Object

`event.currentTarget` identifies the current target for the event, as the event traverses the DOM. It always refers to the element to which the event handler has been attached.

`event.target` identifies the element on which the event occurred.

(`this === event.currentTarget`).

Attaching a single event handler at a higher location in the DOM is called event delegation.










