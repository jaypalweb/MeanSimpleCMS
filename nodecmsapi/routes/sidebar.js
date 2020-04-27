var express = require('express');
var router = express.Router();

//Get Sidebar model
var Sidebar = require('../models/sidebar');

/**
 * GET edit sidebar
 */
router.get('/edit-sidebar', function (req, res) {
    var id = "5ea6781ad4df53a2aee36ac2";

    Sidebar.findById(id, function (err, sidebar) {
        if (err)
            console.log(err);
        res.json(sidebar);
    })
});

/**
 * POST edit sidebar
 */
router.post('/edit-sidebar', function (req, res) {

    var id = "5ea6781ad4df53a2aee36ac2";

    Sidebar.findById(id, function (err, sidebar) {
        if (err)
            console.log(err);

        sidebar.content = req.body.content;
        sidebar.save(function (err) {
            if (err) {
                console.log(err);
                res.json("error");
            } else {
                res.json("ok");
            }
        });
    })
});

//Exports
module.exports = router;