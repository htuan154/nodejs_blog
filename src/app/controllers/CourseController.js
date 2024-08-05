const Courses = require('../modol/Course.js');
// Cách cũ khi làm mới mongoose khởi tạo
const { mutipleMongooseToObject } = require('../../util/mongoose.js');
class CourseController {
    // [GET] / courses/ :slug
    show(req, res, next) {
        Courses.findOne({ slug: req.params.slug })
            .lean()
            .then((course) => {
                res.render('courses/show', { course });
            })
            .catch(next);
    }
}

module.exports = new CourseController();
