var express = require('express');
var router = express.Router();


/* GET home page. */
const users = require('../controller/user.js')
router.get('/users', users.findAll); 
router.post('/users/create', users.create);
// router.get('/users', users.findById);
// router.put('/users', users.update);
// router.create('/users', users.create);
// router.delete('/users', users.delete);





module.exports = router;
