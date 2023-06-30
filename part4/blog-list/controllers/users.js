const bcrypt = require("bcrypt")
const userRouter = require("express").Router()
const User = require("../models/users")

userRouter.post("/", async (request, response, next) => {
    const { username, name, password } = request.body
    const saltRounds = 13

    if (username == undefined || password == undefined) {
        // const responseBody = response.json()
        response.status(400).json({error: "Must provide username and password in request body"})
        return
    }

    if (username.length < 3 || password.length < 3) {
        response.status(400).json({error: "Username and Password must be at least 3 characters long."}).end()
        return
    }

    const pwHash = await bcrypt.hash(password, saltRounds)

    const user = new User({
        username,
        name,
        pwHash
    })

    const savedUser = await user.save()
        .catch(err => next(err))

    response.status(201).json(savedUser)


})

module.exports = userRouter