const express = require('express');
const router = express.Router();
const { viewLogIn, viewSignUp, actionSignUp, actionLogIn, actionLogOut } = require('./controller');

/* GET home page. */
router.get('/login', viewLogIn);
router.get('/signup', viewSignUp);
router.post('/login', actionLogIn);
router.post('/signup', actionSignUp);
router.post('/logout', actionLogOut);

module.exports = router;
