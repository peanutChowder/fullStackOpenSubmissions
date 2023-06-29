const bcrypt = require("bcrypt")
const userRouter = require("express").Router()
const User = require("../models/users")

// userRouter.get("/", async (request, response, next) => {
//     const users = await User.find({})

//     response.json(users)
// })

userRouter.post("/", async (request, response, next) => {
    const { username, name, password } = request.body
    const saltRounds = 13

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