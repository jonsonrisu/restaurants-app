var bcrypt = require("bcryptjs");
const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

exports.findAll = function (req, res) {
    User.findAll(function (err, users) {
        if (err)
            res.send(err);
        res.send(users);
    });
};

exports.create = function (req, res) {

      // Validate request
        if (!req.body.title) {
            res.status(400).send({
            message: "Content can not be empty!"
            });
            return;
        }
        // Create a Tutorial
        const user = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            status: req.body.status ? req.body.status : false
        };
        // Save Tutorial in the database
        Tutorial.create(tutorial)
            .then(data => {
            res.send(data);
            })
            .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while creating the Tutorial."
            });
            });
        };

        exports.findById = function (req, res) {
            User.findById(req.params.id, function (err, user) {
                if (err)
                    res.send(err);
                res.json(user);
            });
};

exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        User.update(req.params.id, new User(req.body), function (err, employee) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'User successfully updated' });
        });
    }
};


exports.delete = function (req, res) {
    User.delete(req.params.id, function (err, user) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'User successfully deleted' });
    });
};