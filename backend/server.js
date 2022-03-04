const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./app/models");
const Role = db.role;
var corsOptions = { 
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


// db.sequelize.sync({force: true}).then(() => {
//     console.log('Drop and Resync Db');
//     initial();
//   });
//   function initial() {
//     Role.create({
//       id: 1,
//       name: "user"
//     });
//     Role.create({
//       id: 2,
//       name: "admin"
//     });
//   }


// define a root route
app.get('/', (req, res) => {
    res.send({"message":"Welcome to Restoran"});
});

const Routes = require('./app/routes/routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Port in ruuning at http://localhost:${PORT}`);
})