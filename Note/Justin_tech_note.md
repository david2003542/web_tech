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
<<<<<<< HEAD
=======

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
>>>>>>> d77fc9fde4bb3985b2289ff92bd6759ff6ec1f46
