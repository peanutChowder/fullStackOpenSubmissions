const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: String,
    name: String,
    password: String
})

userSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
    }
})

module.exports = mongoose.model("User", userSchema)