const db = require("../models")
const User = db.user
module.exports = {
    allUserAccess: (req, res) => {
        res.status(200).send("public content")
    },
    adminAccess: (req, res) => {
        res.status(200).send("admin content")
    },
    userAccess: async (req, res) => {
        // res.status(200).send("user content")
        try {
            const dataUser = await User.findById(req.userId)
            res.status(200).json({message: "user content", result: dataUser  })
        } catch (error) {
            
        }
    }
}