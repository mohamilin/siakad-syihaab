const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
  },
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  roles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "roles",
    },
  ],
})

const User = new mongoose.model("users", userSchema)

module.exports = User