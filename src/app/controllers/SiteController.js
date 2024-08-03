const Course = require('../modol/Course')

class SiteController {
    async index(req, res) {
        try {
          const courses = await Course.find({});
          res.json(courses);
        } catch (error) {
          res.status(400).json({ err: "ERROR!!!" });
        }
      }
    // [GET] / search
    search() {
        res.render('search');
    }
}

module.exports = new SiteController();
