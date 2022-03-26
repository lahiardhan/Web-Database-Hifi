var express = require('express');
var router = express.Router();
const { index, viewForm } = require('./controller');

/* GET home page. */
router.get('/', index);
router.get('/form', viewForm);

module.exports = router;
