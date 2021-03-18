const mongoose = require("mongoose")

const roleSchema = new mongoose.Schema({
    name: {
        type: String,
        enum: ["student", "teacher", "admin"],
        default: "student"
    }
})

const Role = new mongoose.model("roles", roleSchema)

module.exports = Role