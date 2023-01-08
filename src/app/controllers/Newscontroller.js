const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose')

class Newscontroller {
    // [GET] /news
    index(req, res) {
        res.render('news');
    }

    // [GET] /news/:slug
    show(req, res) {
        res.render('home');
    }
}

module.exports = new Newscontroller();
