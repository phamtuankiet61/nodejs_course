var express = require('express');
var router = express.Router();

const mecontroller = require('../app/controllers/Mecontroller');

router.get('/stored/courses', mecontroller.storedCourses);
router.get('/bin/courses', mecontroller.binCourses);

module.exports = router;
