const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose')

class Coursescontroller {

    // [GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('courses/show', { course: mongooseToObject(course) })
            })
            .catch(next)
    }

    // [GET] /courses/create
    create(req, res, next) {
        res.render('courses/create.hbs')
    }

    // [POST] /courses/store
    store(req, res, next) {
        req.body.image = `https://img.youtube.com/vi/${req.body.videoid}/sddefault.jpg`;
        const course = new Course(req.body);
        course.save()
            .then(() => res.redirect('/me/stored/courses'))
            .catch(err => {

            });
    }

    // [GET] /courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => res.render('courses/edit.hbs', {
                course: mongooseToObject(course)
            }))
            .catch(next);
    }

    // [PUT] /courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }

    // [DELETE] /courses/:id
    delete(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [DELETE] /courses/:id/force
    forceDelete(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [PATCH] /courses/:id/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [POST] /courses/handle-form-actions-stored
    handleFormActionsStored(req, res, next) {
        switch(req.body.action) {
            case 'delete':
                Course.delete({ _id: { $in: req.body.courseIds } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            case 'update':
                res.json('updated')
                break;
            default:
                res.json({ message: 'ACTIONS IS INVALID!!!' });
        }
    }

    // [POST] /courses/handle-form-actions-bin
    handleFormActionsBin(req, res, next) {
        switch(req.body.action) {
            case 'delete':
                Course.deleteMany({ _id: { $in: req.body.courseIds } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            case 'restore':
                Course.restore({ _id: { $in: req.body.courseIds } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            default:
                res.json({ message: 'ACTIONS IS INVALID!!!' });
        }
    }

}

module.exports = new Coursescontroller();
