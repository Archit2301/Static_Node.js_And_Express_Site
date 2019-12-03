//Routes for the index and about page defined

const express = require('express');
const router = express.Router();

// Constant defined to save the data from json file
const { projects } = require('../data/data.json');

router.get('/', (req, res) => {
    res.render('index', { projects });
});

router.get('/about', (req, res) => {
    res.render('about');
});

// Exporting the router module to be used in app.js
module.exports = router;