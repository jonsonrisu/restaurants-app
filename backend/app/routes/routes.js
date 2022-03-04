
const { verifySignUp } = require("../middleware");
const userController =   require('../controllers/userController');
const authController =   require('../controllers/authController');

module.exports = function(app) {
  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    authController.signup
  );
  app.post("/api/auth/signin", authController.signin);
};