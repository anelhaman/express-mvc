var express = require('express');
var router = express.Router();

var api = require('./../controllers/api.controller')

/* GET home page. */
router.get('/',api.list_all);
router.get('/:id',api.listById);


module.exports = router;
