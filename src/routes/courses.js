const express = require('express');
const router = express.Router();
const courseControllerr = require('../app/controllers/CourseController');

router.get('/:slug', courseControllerr.show);

module.exports = router;
