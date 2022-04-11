var express = require('express');
var router = express.Router();
const { index, viewForm, viewProfile, viewDbs, viewLogIn, viewSignUp, viewForgot } = require('./controller');

/* GET home page. */
router.get('/', index);
router.get('/login', viewLogIn);
router.get('/signup', viewSignUp);
router.get('/form', viewForm);
router.get('/profile', viewProfile);
router.get('/forgot', viewForgot);
router.get('/dashboard', viewDbs);

module.exports = router;
