const Course = require('../models/Course.js');
// Cách cũ khi làm mới mongoose khởi tạo
const { mongooseToObject } = require('../../util/mongoose.js');

class CourseController {
    // [GET] / courses/ :slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) =>
                res.render('courses/show', {
                    course: mongooseToObject(course),
                }),
            )
            .catch(next);
    }

    // [GET] / courses/create
    create(req, res, next) {
        res.render('courses/create');
    }
    // [POST] /courses/store
    store(req, res, next) {
        req.body.image = `https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`;
        const course = new Course(req.body);
        course
            .save()
            .then(() => res.redirect('/'))
            .catch((error) => {});
    }
}

module.exports = new CourseController();
