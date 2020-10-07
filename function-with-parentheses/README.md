# Type Inference

First of all, let's review something in JavaScript, the [type inference](https://en.wikipedia.org/wiki/Type_inference).

All the "actions" in JavaScript have a return type. It could be, a function, a variable declaration, an assignment, etc...

Take a look at this example:

```javascript
function sayHello() {
  console.log('Hello!');
}
```

We can not see the reserved word `return` inside the function's body, but there is a return type, and when we "don't return anything", the return type is `undefined`.

Let's check this on [DevTools](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools):


