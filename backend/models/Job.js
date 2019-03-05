let mongoose = require("mongoose")
let Schema = mongoose.Schema

let jobSchema = new Schema(
  {
    position: String,
    description: String,
    requirements: String,
    image: String,
    posted_by: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    company: {
      type: Schema.Types.ObjectId,
      ref: "Company"
    },
    address: {
      pais: String,
      estado: String,
      ciudad: String,
      alcaldia: String,
      colonia: String,
      direccion: String,
      location: { coords: [String], lat: String, lng: String }
    },
    apply: {
      email: String,
      phone: String,
      whatsapp: String,
      onsite: String
    },
    active: {
      type: Boolean,
      default: true
    },
    slug: String
  },
  { timestamps: true }
)

module.exports = mongoose.model("Job", jobSchema)
