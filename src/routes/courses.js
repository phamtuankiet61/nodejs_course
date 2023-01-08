var express = require('express');
var router = express.Router();

const coursescontroller = require('../app/controllers/Coursescontroller');

router.get('/create', coursescontroller.create);
router.post('/store', coursescontroller.store);
router.get('/:slug', coursescontroller.show);

module.exports = router;
