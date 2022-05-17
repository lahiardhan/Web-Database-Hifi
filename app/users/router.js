const express = require('express');
const router = express.Router();
const { index, viewForm, viewProfile, viewForgot, actionForgot, actionProfile } = require('./controller');
const { ensureAuthenticated } = require('../middleware/auth');

router.get('/', index);
router.get('/form', ensureAuthenticated,viewForm);
router.get('/profile', ensureAuthenticated, viewProfile);
router.get('/forgot', viewForgot);
router.post('/profile', actionProfile);
router.post('/forgot', actionForgot);

module.exports = router;
