var express = require('express');
var router = express.Router();

//Get user model
var User = require('../models/user');

/**
 * GET all pages
 */
router.get('/', function (req, res) {
    Page.find({}, function (err, pages) {
        if (err)
            console.log(err);
        res.json(pages);
    })
});

/**
 * GET a page
 */
router.get('/:slug', function (req, res) {
    var slug = req.params.slug;
    Page.findOne({ slug: slug }, function (err, page) {
        if (err)
            console.log(err);
        res.json(page);
    })
});

//Exports
module.exports = router;