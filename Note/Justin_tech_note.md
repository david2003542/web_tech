### Nodemon
 - Install `npm install nodemon --save-dev
 - Add ` "devstart":"nodemon ./bin/www" ` in `package.json` scripts
 - Start `DEBUG=web:* node run devstart`
 
### Export
 - Export default `Class name`
 - Export {default as `Class name` } from `path`

### React Boostrap
 - Import `Component` from 'react-bootstrap'

### [Connect to Backend API](https://medium.com/@jrshenrique/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c)

### [React Props & State] (https://codeburst.io/props-and-state-in-react-native-explained-in-simple-english-8ea73b1d224e)
 - Props **__Immutable__** 
   - All React components must act like pure functions with respect to their props.
 - State
   - State is similar to props, but it is private and fully controlled by the component.
   - **__Do Not Modify State Directly__**
     - use `setState()`
   - **__State Updates May Be Asynchronous__**
     - `this.props` and `this.state` may be updated asynchronously, you should not rely on their values for calculating the next state.
   - **__State Updates are Merged__**

### Lifecycle
 - it’s very important to free up resources taken by the components when they are destroyed.

### Arrow Function 
 - **Note Later**

### [Redux](https://redux.js.org/introduction/getting-started)
- Motivation 
 - Lose control over when you manage ever-changing state
- Core Concepts
  - state is described as a plain object, which doesn't have setters
  - To change the state, you need to dispatch an action. 
  - tie state and action together, we write a function called a reducer. 
- Three Principles
1. Single Source of Truth
- The state of your whole application is stored in an object tree within a single store.
2. State is read-only
- The only way to change the state is to emit an action, an object describing what happened.
3. Changes are made with pure functions

- Actions


### [RXJS](https://rxjs-dev.firebaseapp.com/guide/overview) 
- Combine Observer pattern with the Iterator pattern and functional programming with collections
    - Observer: 
      The observer pattern is a software design pattern in which an object, called the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes, usually by calling one of their methods.
    - Iterator:
    In object-oriented programming, the iterator pattern is a design pattern in which an iterator is used to traverse a container and access the container's elements. The iterator pattern decouples algorithms from containers; in some cases, algorithms are necessarily container-specific and thus cannot be decoupled.
- Essential Concetps
  - Observable: the idea of an invokable collection of future values or events
  - Observer: a collection of callbacks knows how to listen to values delivered by the Observable
  - Subscription: the execution of an Observable, is primarily useful for cancelling the execution
  - Operatiors: pure functions that enable a functional programming style of dealing with collections with operations 
  - Subjects: EventEmitter, and the only way of multicasting a value or event to multiple Observers.
  - Schedulers: centralized dispatchers to control concurrency, allowing us to coordinate when computation happens on e.g. setTimeout or requestAnimationFrame or others.


### [Redux-Observable](https://redux-observable.js.org/docs/basics/Epics.html)



