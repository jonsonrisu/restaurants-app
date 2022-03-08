const db = require("../models");
const Services = db.service;

exports.findAll = async function (req, res) {
  await Services.findAll({
    }).then(services => {
        res.send(services);
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });;
};

exports.addServices = async function (req, res) {
await Services.create(
    {
        name: req.body.name,
        description: req.body.description,
        image: req.body.icon, 
    }
).then(services => {
      res.send({error:false, message: "Services added successfully." });
    });
};


