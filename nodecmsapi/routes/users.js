var express = require('express');
var router = express.Router();

//Get user model
var User = require('../models/user');

/**
 * POST register
 */
router.post('/register', function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    User.findOne({ username: username }, function (err, user) {
        if (err)
            console.log(err);

        if (user) {
            res.json("userExists");
        } else {
            var user = new User({
                username: username,
                password: password
            });
            user.save(function (err) {
                if (err) {
                    console.log(err);
                } else {
                    res.json("userRegistered");
                }
            });
        }
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