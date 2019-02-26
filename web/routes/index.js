var express = require('express');
var router = express.Router();

const users = require('../controller/user.js')

router.get('/users', users.findAll); 
router.get('/users/:id', users.findById); 
router.post('/users/create', users.create);
router.put('/users/:id', users.update);
router.delete('/users/:id', users.delete);





module.exports = router;
