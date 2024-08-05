class NewsController {
    // [Get] /news
    index(req, res) {
        res.render('news');
    }
    // [GET] /news/slug biến động
    show(req, res) {
        res.send('NEWS DETAIL!!!');
    }
}

module.exports = new NewsController();
