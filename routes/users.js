const express = require("express");
const router = express.Router();
const passport = require("passport");
const usersController = require("../controllers/users");

router
  .route("/register")
  .get(usersController.renderRegister)
  .post(usersController.register);

router
  .route("/login")
  .get(usersController.renderLogin)
  .post(
    passport.authenticate("local", {
      failureFlash: true,
      failureRedirect: "/login",
    }),
    usersController.login,
  );

router.get("/logout", usersController.logout);

module.exports = router;
