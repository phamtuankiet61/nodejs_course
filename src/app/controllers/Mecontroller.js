const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose')

class Mecontroller {
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        Course.find({})
            .then(courses => res.render('me/storedCourses', {
                courses: mutipleMongooseToObject(courses)
            }))
            .catch(next)
        
    }
    // [GET] /me/bin/courses
    binCourses(req, res, next) {
        Course.findDeleted({})
            .then(courses => res.render('me/binCourses', {
                courses: mutipleMongooseToObject(courses)
            }))
            .catch(next)
        
    }
}

module.exports = new Mecontroller();
