require("dotenv").config()
const mongoose = require("mongoose")
const connectEnv = process.env.DB_PROJECT
const db = require("../models")
const Role = db.role

db.mongoose
  .connect(connectEnv, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Success connect MongoDB")
    initial()
  })
  .catch((err) => {
    console.error("Connection erro", err)
    process.exit()
  })

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "student",
      }).save((err) => {
        if (err) {
          console.log("error", err)
        }

        console.log("added 'user' to roles collection")
      })

      new Role({
        name: "teacher",
      }).save((err) => {
        if (err) {
          console.log("error", err)
        }

        console.log("added 'teacher' to roles collection")
      })

      new Role({
        name: "admin",
      }).save((err) => {
        if (err) {
          console.log("error", err)
        }

        console.log("added 'admin' to roles collection")
      })
    }
  })
}

const dbProject = mongoose.connection
module.exports = dbProject
