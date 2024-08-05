const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const exphbs = require('express-handlebars');
const route = require('./routes');
const db = require('./config/db');
const handlebars = require('express-handlebars');

// Connect to DB
db.connect();
const app = express();
const port = 3000;

// Middleware xử lý form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static file
app.use(express.static(path.join(__dirname, 'src/public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(methodOverride('_method'));
// HTTP Logger
app.use(morgan('combined'));

// Template engine
app.engine(
    'hbs',
    exphbs.engine({
        //Rename
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
