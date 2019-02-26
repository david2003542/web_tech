var express = require('express');
var router = express.Router();

<<<<<<< HEAD

/* GET home page. */
const users = require('../controller/user.js')
router.get('/users', users.findAll);
// router.get('/users', users.findById);
// router.put('/users', users.update);
// router.create('/users', users.create);
// router.delete('/users', users.delete);
=======
const users = require('../controller/user.js')

router.get('/users', users.findAll); 
router.get('/users/:id', users.findById); 
router.post('/users/create', users.create);
router.put('/users/:id', users.update);
router.delete('/users/:id', users.delete);
>>>>>>> d77fc9fde4bb3985b2289ff92bd6759ff6ec1f46





module.exports = router;
