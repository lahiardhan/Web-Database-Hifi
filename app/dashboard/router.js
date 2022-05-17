const express = require('express');
const { ensureAuthenticated } = require('../middleware/auth');
const { viewDashboard, viewEdit, actionEdit, deleteDashboard } = require('./controller');
const router = express.Router();

router.get('/', ensureAuthenticated, viewDashboard);
router.get('/edit/:id', ensureAuthenticated, viewEdit);
router.put('/edit/:id', ensureAuthenticated, actionEdit);
router.delete('/delete/:id', ensureAuthenticated, deleteDashboard);

module.exports = router;
