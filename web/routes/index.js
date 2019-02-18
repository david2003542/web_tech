var express = require('express');
var router = express.Router();


/* GET home page. */
const users = require('../controller/user')
router.get('/users', users.findAll);
// router.put('/users', users.findAll());
// router.post('/users', users.create());
// router.delete('/users', users.delete());





module.exports = router;
