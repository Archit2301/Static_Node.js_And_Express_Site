// Routes to the projects have been defined here
const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const title = projects[id].project_name;
    const { description } = projects[id];
    const { technologies } = projects[id];
    const { live_link } = projects[id];
    const { github_link } = projects[id]; 
    const { image_urls } = projects[id];

    const templateData = { id, title, description, technologies, live_link, github_link, image_urls };

    res.render('project', templateData);
});

module.exports = router;