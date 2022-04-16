var express = require('express');
var router = express.Router();
const { index, viewForm, viewProfile, viewDashboard, viewLogIn, viewSignUp, viewForgot, deleteDashboard, viewEditDashboard, actionEditDashboard } = require('./controller');

/* GET home page. */
router.get('/', index);
router.get('/login', viewLogIn);
router.get('/signup', viewSignUp);
router.get('/form', viewForm);
router.get('/profile', viewProfile);
router.get('/forgot', viewForgot);
router.get('/dashboard', viewDashboard);
router.get('/dashboard/edit/:id', viewEditDashboard);
router.put('/dashboard/edit/:id', actionEditDashboard);
router.delete('/dashboard/delete/:id', deleteDashboard);

module.exports = router;
