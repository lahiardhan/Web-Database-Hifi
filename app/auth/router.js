const express = require('express');
const router = express.Router();
const { viewLogIn, viewSignUp, actionSignUp, actionLogIn, actionLogOut } = require('./controller');

/* GET home page. */
router.get('/login', viewLogIn);
router.get('/signup', viewSignUp);
router.get('/logout', actionLogOut);
router.post('/login', actionLogIn);
router.post('/signup', actionSignUp);

module.exports = router;
