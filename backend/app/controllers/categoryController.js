const Category = require('../models/Category')

exports.findAll = function (req, res) {
    Category.findAll(function (err, category) {
        if (err)
            res.send(err);
        res.send(category);
    });
};

exports.create = function (req, res) {

    const new_category = new Category(req.body);
    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        User.create(new_category, function (err, category) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "Category added successfully!", data: category });
        });
    }
};


