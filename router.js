
var express = require('express'),
    actions = require('./app');

var router = express.Router();

router.post('/sendmail', actions.sendmail);

module.exports=router;