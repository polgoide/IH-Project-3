let mongoose = require("mongoose")
let Schema = mongoose.Schema

let tagSchema = new Schema(
  {
    jobs: [
      {
        type: String
      }
    ],
    company: [
      {
        type: String
      }
    ]
  },
  { timestamps: true }
)

module.exports = mongoose.model("Tag", tagSchema)
