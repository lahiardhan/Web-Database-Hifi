var express = require('express');
var router = express.Router();
const { index, viewForm, viewProfile, viewDbs } = require('./controller');

/* GET home page. */
router.get('/', index);
router.get('/form', viewForm);
router.get('/profile', viewProfile);
router.get('/dbs', viewDbs);

module.exports = router;
