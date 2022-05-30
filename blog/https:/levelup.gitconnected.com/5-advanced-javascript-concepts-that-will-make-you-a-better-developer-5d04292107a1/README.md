https://levelup.gitconnected.com/5-advanced-javascript-concepts-that-will-make-you-a-better-developer-5d04292107a1
## 5 Advanced JavaScript concepts that will make you a better developer

![Photo by [Arnold Francisca](https://unsplash.com/@clark_fransa?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)](https://cdn-images-1.medium.com/max/10368/0*1V1IqXmsODAvF4vo)

### Currying

Currying means evaluating functions with multiple arguments and decomposing them into a sequence of functions with a single argument. So, instead of taking all arguments at once, the function takes the first argument and returns a new function, which takes second argument and returns a new function, which takes the third… and so on until all arguments are provided and the final function is executed.

Currying helps you divide functions into smaller reusable functions that handle a single responsibility. This makes your functions more pure, less prone to errors and easier to test.

```javascript
// consider the following function to process bank transaction
const transaction = (fee, balance, amount) => (
  balance + amout - fee;
);

// Simple curry implementation
const curry = (fn, ...args) => (
  (..._arg) => (
    fn(...args, ..._arg)
  )
);

// We could easily reuse the transaction logic for a "free" transaction
const freeTransaction = curry(transaction, 0);

freeTransaction(10, 90); // = 100
```

In the above example, we created our own simple implementation for currying a function with exactly three parameters. As a general solution, I suggest using [Ramda](https://ramdajs.com/docs/#curry) or similar which supports currying functions with any number of arguments and also with support for changing order of arguments using placeholders.

### Composition

Composition is a technique where the result of one function is passed on to the next function, which is passed-on to the next function, and so on… until the final function is executed and some result is computed. Function compositions can be composed of any number of functions.

Composition also helps split functions into smaller reusable functions the has a single responsibility.

```javascript
// Compose function
const compose = (...fns) => x => fns.reduce((y, f) => f(y), x); 

// Functions
const addFee = amount => amount + 2;
const addDiscount = amount => amount - 5;

// function composition
const composition = compose(addFee, addDiscount)(100);
```

[Ramda](https://ramdajs.com) also has APIs for function composition with [pipe](https://ramdajs.com/docs/#pipe) and [compose](https://ramdajs.com/docs/#compose).

### Closures

A closure is a function that preserves access to vars and arguments (the scope) of the outer function, even after the outer function has finished executing. Closures are useful for hiding implementation detail in JavaScript. In other words, it can be useful to create private variables or functions like so:

```javascript
 function counter() {
  let count = 0;

  function increment() {
    return count += 1;
  };

  return increment;
}

const generateId = counter();

generateId(); // 1
generateId(); // 2
generateId(); // 3
```
 
### Coalescing

The nullish coalescing operator ?? is a logical operator that returns its right-hand side operand when its left-hand side operand is [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null) or [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined), and otherwise returns its left-hand side operand. The Nullish Coalescing Operator is handy when you want to use falsy values as a default. Or simply when you treat the falsy values as valid ones

```javascript
 // Falsy values
const value = 0 ?? 100; // = 0
const value = false ?? true; // = false


// Default values
const value = null ?? 100; // = 100
const value = undefined ?? 100 // = 100;
```
 
### Reflect

Reflect is a global object that provides some useful methods for metaprogramming. Reflect is not a function nor it’s constructible. Its only job is to provide static methods for reflection. These methods can be divided into two categories. **Introspection methods** which are non-destructive methods and **modification methods** which are destructive since they mutate the object or its behavior.

```javascript
const person = { 
  name: 'Bob', 
  [Symbol('email')]: 'bob@evil.com' 
};

Reflect.get(person, 'name'); // = Bob
Reflect.has(person, 'email'); // = true
Reflect.has(person, 'phone'); // = false
Reflect.getPrototypeOf(person); // = { constructor ... }
Reflect.getOwnPropertyDescriptor( person, 'name'); // = { value: 'Bob', writable: true, enumerable: true, configurable: true }
Reflect.ownKeys(person); // name, Symbol(email)

Reflect.defineProperty(person, 'phone', { writable: true });
Reflect.has(person, 'phone'); // = true
Reflect.set(person, 'phone', '123456789');

Reflect.deleteProperty(person, 'phone');
Reflect.has(person, 'phone'); // = false
```
 
There’s a lot more to Reflect and you can read the details [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect).

That concludes 5 JavaScript concepts that will make you a better developer. I hope you enjoyed the reading and maybe even learned something new.

Please also read [5 Concepts That Will Make You a Better React Developer](https://levelup.gitconnected.com/5-concepts-that-will-make-you-a-better-react-developer-4d0b56e031e7).

## Level Up Coding

Thanks for being a part of our community! Level Up is transforming tech recruiting. [**Find your perfect job](https://jobs.levelup.dev/talent/welcome?referral=true) at the best companies**.
[**Level Up — Transforming Tech Hiring**
*Level Up — Transforming Tech Hiring 🔥 Enabling software engineers to find the perfect role that…*jobs.levelup.dev](https://jobs.levelup.dev/talent/welcome?referral=true)
