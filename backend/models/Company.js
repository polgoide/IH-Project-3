let mongoose = require("mongoose")
let Schema = mongoose.Schema

let companySchema = new Schema(
  {
    name: String,
    description: String,
    image: String,
    url: String,
    admin: [
      {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    ],
    address: {
      country: String,
      state: String,
      city: String,
      neighborhood: String,
      address: String,
      location: { coords: [String], lat: String, lng: String }
    },
    contact: {
      email: String,
      phone: String,
      whatsapp: String
    },
    active: {
      type: Boolean,
      default: true
    },
    slug: String
  },
  { timestamps: true }
)

module.exports = mongoose.model("Company", companySchema)
