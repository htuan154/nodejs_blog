
class NewsController {
    // [Get] /news
    index(req, res) {
        
        res.render('news');
    }
    // [GET] /news/slug biến động
    show() {
        res.send('News Detail!');
    }
}

module.exports = new NewsController();
