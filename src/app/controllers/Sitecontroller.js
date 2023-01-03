const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose')

class Sitecontroller {

    // [GET] /
    index(req, res, next) {

        Course.find({})
            .then(courses => {
                res.render('home', { 
                    courses: mutipleMongooseToObject(courses)
                })
            })
            .catch(err => next(err))

    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new Sitecontroller();
