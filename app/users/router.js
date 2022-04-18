var express = require('express');
var router = express.Router();
const { index, viewForm, viewProfile, viewForgot } = require('./controller');

/* GET home page. */
router.get('/', index);
router.get('/form', viewForm);
router.get('/profile', viewProfile);
router.get('/forgot', viewForgot);

module.exports = router;
