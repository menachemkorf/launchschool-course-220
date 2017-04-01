## Object Creation Methods
- object factories
  - A function that returns an object
  - the properties that differ from object to object are passed in to the function as parametures

## Context
In Javascript, the `this` keyword is a local variable that's bound to the 'context object', which is based on how the function/method was executed,

if there is no explicit caller the execution context is automaticaly the global (window)  object. there are a couple of ways to change that:
- calling the function as a property of an object - `obj.method()`
- using `call` - `func.call(obj)`
- using `apply` - `func.apply(obj)`
- binding a function to a context will create a new function where `this` is permanently bound to it - `var newFunction = func.bind(obj)`

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

##Partial function application
a process by which a function is invoked with some of its arguments at one time and the rest at a later time. The arguments passed earlier are stored and used later when the remaining arguments are provided.
