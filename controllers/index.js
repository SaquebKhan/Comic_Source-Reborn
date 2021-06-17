const router = require('express').Router();

const apiRoutes = require('./api/index.js');
const htmlRoutes = require('./html/index.js');

router.use('/', htmlRoutes);
router.use('/api', apiRoutes);

module.exports = router;
