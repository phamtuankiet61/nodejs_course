var express = require('express');
var router = express.Router();

const sitecontroller = require('../app/controllers/Sitecontroller');

router.get('/search', sitecontroller.search);
router.get('/', sitecontroller.index);

module.exports = router;
