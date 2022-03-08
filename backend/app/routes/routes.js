const multer = require('multer');
const upload = multer();
const { verifySignUp } = require("../middleware");
const categoryController =   require('../controllers/categoryController');
const authController =   require('../controllers/authController');
const servicesController =require('../controllers/servicesController');
const { addCategoryValidation } = require('../Validation/validation');

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept",
            'Access-Control-Allow-Origin: *' 
        );
        next();
    });

const router = require("express").Router();


 //auth
 router.post("/auth/signup", [ verifySignUp.checkDuplicateUsernameOrEmail,verifySignUp.checkRolesExisted],
    authController.signup
  );
  router.post("/auth/signin", authController.signin);

  //category
  router.get("/category/list", categoryController.findAll);
  router.post("/category/create", [addCategoryValidation],categoryController.uploadImg, categoryController.addCategory);

  //services 
  router.get("/services/list", servicesController.findAll);
  router.post("/services/create",servicesController.addServices);


  app.use('/api',router);

}