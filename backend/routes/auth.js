const express = require("express")
const router = express.Router()
const User = require("../models/User")
const passport = require("passport")
const uploadCloud = require("../helpers/cloudinary")
let { isAuth } = require("../helpers/middlewares")

// Signup
router.post("/signup", (req, res, next) => {
  User.register(req.body, req.body.password)
    .then(user => {
      res.status(201).json(user)
    })
    .catch(e => next(e))
})
// Login
router.post("/login", passport.authenticate("local"), (req, res, next) => {
  res.status(200).json({ user: req.user, message: "User logged" })
})

// Logged in
router.get("/loggedin", isAuth, (req, res, next) => {
  res.status(200).json({ message: "User logged", user: req.user })
})

// Logout
router.get("/logout", isAuth, (req, res) => {
  req.logout()
  req.session.destroy(err => {
    if (!err) {
      res
        .status(200)
        .clearCookie("connect.sid", { path: "/" })
        .json({ message: "Logged out" })
    }
  })
})

// Edit profile

router.post("/edit", isAuth, (req, res, next) => {
  User.findByIdAndUpdate(req.user._id, req.body)
    .then(() => {
      res.status(200).json({ message: "User updated" })
    })
    .catch(e => console.log(e))
})

// Profile pic
router.post(
  "/upload",
  isAuth,
  uploadCloud.single("image"),
  (req, res, next) => {
    User.findByIdAndUpdate(req.user._id, { image: req.file.url })
      .then(response => {
        res.status(200).json({
          image: req.user.image,
          message: "User logged"
        })
      })
      .catch(e => console.log(e))
  }
)

module.exports = router
