var express = require('express');
const { viewDashboard, viewEdit, actionEdit, deleteDashboard } = require('./controller');
var router = express.Router();

router.get('/', viewDashboard);
router.get('/edit/:id', viewEdit);
router.put('/edit/:id', actionEdit);
router.delete('/delete/:id', deleteDashboard);

module.exports = router;
