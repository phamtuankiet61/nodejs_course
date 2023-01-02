var express = require('express');
var router = express.Router();

const sitecontroller = require('../app/controllers/Sitecontroller');

router.use('/search', sitecontroller.search);
router.use('/', sitecontroller.index);

module.exports = router;
