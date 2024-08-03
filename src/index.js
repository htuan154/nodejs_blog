const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;
const exphbs = require('express-handlebars');
const route = require('./routes');
const db = require('./config/db');

// Connect to DB
db.connect();

// Middleware xử lý form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: 10 }));

// Static file
app.use(express.static(path.join(__dirname, 'public')));

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
