var express = require('express');
var router = express.Router();

const newscontroller = require('../app/controllers/Newscontroller');

router.get('/:slug', newscontroller.show);
router.get('/', newscontroller.index);

module.exports = router;
