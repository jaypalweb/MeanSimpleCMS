var express = require('express');
var router = express.Router();

//Get page model
var Page = require('../models/page');

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

//Exports
module.exports = router;