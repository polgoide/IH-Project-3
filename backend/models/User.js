let mongoose = require("mongoose")
let Schema = mongoose.Schema
let passportLocalMongoose = require("passport-local-mongoose")

let userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true
    },
    name: String,
    image: {
      type: String
    },
    role: {
      type: String,
      enum: ["Guest", "Company", "Admin"],
      default: "Guest"
    },
    active: {
      type: Boolean,
      default: true
    },
    facebook_id: String
  },
  { timestamps: true }
)

userSchema.plugin(passportLocalMongoose, { usernameField: "email" })

module.exports = mongoose.model("User", userSchema)
