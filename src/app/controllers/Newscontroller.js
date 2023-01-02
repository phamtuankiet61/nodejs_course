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
