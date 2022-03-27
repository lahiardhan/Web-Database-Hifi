var express = require('express');
var router = express.Router();
const { index, viewForm, viewSignUp } = require('./controller');

/* GET home page. */
router.get('/', index);
router.get('/form', viewForm);
router.get('/signup', viewSignUp);

module.exports = router;
