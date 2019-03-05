const express = require("express")
const router = express.Router()
const Job = require("../models/Job")
let { isAuth } = require("../helpers/middlewares")
const uploadCloud = require("../helpers/cloudinary")

// Edit job
router.post(
  "/editar/:id",
  isAuth,
  uploadCloud.single("image"),
  (req, res, next) => {
    let { id } = req.params
    Job.findById(id)
      .then(job => {
        if (job.posted_by === req.user._id) {
          Job.findByIdAndUpdate({ ...req.body, posted_by: req.user._id })
            .then(job => res.status(200).json({ job }))
            .catch(e => console.log(e))
        } else {
          res.json({
            message: "The user trying to edit the posting didn't create it"
          })
        }
      })
      .catch(e => console.log(e))
  }
)
router.get("/editar/:id", isAuth, (req, res, next) => {
  let { id } = req.params
  Job.findById(id)
    .then(job => {
      if (job.posted_by === req.user._id) {
        job => res.status(200).json({ job })
      } else {
        res.json({
          message: "The user trying to edit the posting didn't create it"
        })
      }
    })
    .catch(e => console.log(e))
})

// New job
router.post("/nuevo", isAuth, uploadCloud.single("image"), (req, res, next) => {
  if (req.file) req.body.image = req.file.url
  Job.create({ ...req.body, posted_by: req.user._id })
    .then(job => res.status(200).json({ job: job }))
    .catch(e => console.log(e))
})

// Job details
router.get("/vacante/:slug/:id", (req, res, next) => {
  console.log(req.params)
  Job.findById({ _id: req.params.id })
    .then(jobs => res.status(200).json({ jobs: jobs }))
    .catch(e => console.log(e))
})

// Listing
router.get("/trabajos", (req, res, next) => {
  console.log(req.query)
  let query = req.query
  Job.find({ query })
    .then(jobs => res.status(200).json({ jobs: jobs }))
    .catch(e => console.log(e))
})

// Home
router.get("/", (req, res, next) => {
  Job.find()
    .then(jobs => res.status(200).json({ jobs: jobs }))
    .catch(e => console.log(e))
})

module.exports = router
