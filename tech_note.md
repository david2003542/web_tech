### variable declare difference  -- author by david

1. let: it's a blocked scope.
2. const: it's a blocked scope and it can't be redeclaired
3. var: var can be global / function scope it's based on where you declare it and it's able to redeclared

reference: https://dev.to/sarah_chima/var-let-and-const--whats-the-difference-69e


### difference between async await and promise -- author by david
First we will discuss difference between async and sync

The earliest and most straightforward solution to being stuck in the synchronous world was asynchronous callbacks (think setTimeout()).

asynchronous(async) means that you don't need to wait for database or processing time and it will deal with next line command first until get the response.

synchronous(sync) means that program will execute line by line

promise: it's the basic technique under async. we can use "then()" to recall the result when we want to use it.

Second we will look though to async/await

Benefits:
1. Continue using promises
2. Write asynchronous code that looks and feels synchronous
3. Cleans up your syntax and makes your code more human-readable

await: is designed for waiting response from different async function therefore we can use async and await to let code run as synchronous


### what is middleware




