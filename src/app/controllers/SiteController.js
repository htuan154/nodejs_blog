class SiteController {
    // [Get] / home
    index(req, res) {
        res.render('home');
    }
    // [GET] / search
    search() {
        res.render('search');
    }
}

module.exports = new SiteController();
