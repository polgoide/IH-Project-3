const express = require("express")
const router = express.Router()
const Job = require("../models/Job")
let { isAuth } = require("../helpers/middlewares")
const uploadCloud = require("../helpers/cloudinary")

// Search
router.post("/search", (req, res, next) => {
  const { query } = req.body
  Job.find({
    $or: [
      { position: { $regex: query, $options: "i" } },
      { jobType: { $regex: query, $options: "i" } },
      { "address.alcaldia": { $regex: query, $options: "i" } },
      { "address.direccion": { $regex: query, $options: "i" } },
      { "company.name": { $regex: query, $options: "i" } },
      { "company.companyType": { $regex: query, $options: "i" } },
      { description: { $regex: query, $options: "i" } }
    ]
  })
    .then(result => {
      console.log(result)
      res.json({ result, query })
    })
    .catch(e => next(e))
})

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

// Post pic
router.post(
  "/upload",
  isAuth,
  uploadCloud.single("image"),
  (req, res, next) => {
    let apiUrl = req.file.secure_url
      .split("/polgoide/image/upload")
      .join("/polgoide/image/upload/q_auto:low")
    res.json({ image: req.file.secure_url, api: apiUrl })
  }
)

// New job
router.post("/nuevo", isAuth, uploadCloud.single("image"), (req, res, next) => {
  if (req.file) req.body.image = req.file.url
  Job.create({ ...req.body, posted_by: req.user._id })
    .then(job => res.status(200).json({ job: job }))
    .catch(e => console.log(e))
})

// Job details
router.get("/vacante/:id", (req, res, next) => {
  console.log(req.params)
  Job.findById({ _id: req.params.id })
    .then(job => res.status(200).json(job))
    .catch(e => console.log(e))
})

// Totals
router.get("/totals", (req, res, next) => {
  let query = req.query
  Job.aggregate([
    {
      $group: {
        _id: "$" + Object.keys(query)[0],
        count: {
          $sum: 1
        }
      }
    },
    {
      $limit: 4
    },
    {
      $sort: {
        count: -1
      }
    }
  ])
    .then(results => res.status(200).json(results))
    .catch(e => console.log(e))
})

// Listing
router.get("/trabajos", (req, res, next) => {
  let query = req.query
  console.log("query", req.query)
  if (!query || query === {}) query = ""
  if (query.query) {
    Job.find({
      $or: [
        { position: { $regex: query.query, $options: "i" } },
        { jobType: { $regex: query.query, $options: "i" } },
        { "address.alcaldia": { $regex: query.query, $options: "i" } },
        { "address.direccion": { $regex: query.query, $options: "i" } },
        { "company.name": { $regex: query.query, $options: "i" } },
        { "company.companyType": { $regex: query.query, $options: "i" } },
        { description: { $regex: query.query, $options: "i" } }
      ]
    })
      .then(result => {
        console.log(result)
        res.json(result)
      })
      .catch(e => next(e))
  } else {
    Job.find(query)
      .then(jobs => res.status(200).json(jobs))
      .catch(e => console.log(e))
  }
})

// Home
router.get("/", (req, res, next) => {
  Job.find()
    .then(jobs => res.status(200).json({ jobs: jobs }))
    .catch(e => console.log(e))
})

module.exports = router
