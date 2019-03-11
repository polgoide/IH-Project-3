let mongoose = require("mongoose")
let Schema = mongoose.Schema

let jobSchema = new Schema(
  {
    position: String,
    jobType: String,
    description: String,
    requirements: String,
    gender: {
      type: String,
      enum: ["indistinto", "mujer", "hombre"]
    },
    image: String,
    posted_by: {
      type: Schema.Types.ObjectId,
      ref: "User"
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
    company: {
      name: {
        type: String,
        required: true
      },
      companyType: String
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
