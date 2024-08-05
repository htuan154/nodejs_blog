const Course = require('../model/Course');
// Cách cũ khi làm mới mongoose khởi tạo
const { mutipleMongooseToObject } = require('../../util/mongoose.js');
class SiteController {
    index(req, res, next) {
        Course.find({})
            //Sử dụng lean() sau find() với Mongoose
            //kích hoạt lean() này sẽ cho Mongoose bỏ qua việc khởi tạo
            //toàn bộ tài liệu Mongoose và chỉ cung cấp cho bạn POJO.
            //giúp truy vấn nhanh hơn rất nhiều khi sử dụng find().
            .lean()
            .then((courses) => res.render('home', { courses }))
            .catch(next);
    }

    // [GET] / search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
