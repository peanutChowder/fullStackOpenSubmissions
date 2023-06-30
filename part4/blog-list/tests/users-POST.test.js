const bcrypt = require("bcrypt")
const mongoose = require("mongoose")
const supertest = require("supertest")
const app = require("../app")
const api = supertest(app)
const User = require("../models/users")

describe("No users in db", () => {
    beforeEach(async () => {
        await User.deleteMany({})

        const pwHash = await bcrypt.hash("weak password", 10)
        const user = new User({username: "basics", name: "The Guy", password: pwHash})
        await user.save()
    })
    
    test("Create a new user", async () => {
        const user = {
            username: "user51",
            name: "The guy",
            password: "password"
        }
        await api.post("/api/users")
            .send(user)
            .expect(201)
            .expect("Content-Type", /application\/json/)

    })

    afterAll(async () => {
        await mongoose.connection.close()
    })
})