const express = require("express");
const router = express.Router(); // Change to express.Router()
const passport = require("passport");

const CLIENT_URL = "http://localhost:3000/mainpage";

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successful",
      user: req.user,
    });
  } else {
    res.status(401).json({ // Handle case when user is not authenticated
      success: false,
      message: "User not authenticated",
    });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "Login failed",
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  req.session.destroy(); // Use req.session.destroy() to properly destroy the session
  res.redirect(CLIENT_URL);
});

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

module.exports = router;
