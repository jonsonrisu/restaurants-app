const multer = require('multer');
const { category } = require('../models');
const db = require("../models");
const Category = db.category;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/category');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-category-${file.originalname}`);
    }
});

exports.uploadImg = multer({ storage: storage }).single('image');

exports.findAll = async function (req, res) {
  await Category.findAll({
    }).then(category => {
        res.send(category);
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });;
};

exports.addCategory = async function (req, res) {
    console.log(req.body);
await Category.create(
    {
        name: req.body.name,
        keywords: req.body.keywords,
        image: req.file.path,  //update this
        status :req.body.status ? req.body.status : 0
    }
).then(category => {
      res.send({error:false, message: "Category added successfully." });
    });
};


