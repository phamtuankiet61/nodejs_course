var express = require('express');
var router = express.Router();

const mecontroller = require('../app/controllers/Mecontroller');

router.get('/stored/courses', mecontroller.storedCourses);

module.exports = router;
