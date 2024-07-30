const path = require('path')
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;
const exphbs = require('express-handlebars');
// Static file
app.use(express.static(path.join(__dirname,'public')));

// HTTP Logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', exphbs.engine({
  //Rename
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Test
app.get('/', (req, res) => {
  res.render('home');
});
app.get('/news', (req, res) => {
  res.render('news');
});
app.get('/search', (req, res) => {
  res.render('search');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
