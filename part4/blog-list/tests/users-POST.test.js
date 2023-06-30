const mongoose = require("mongoose")
const supertest = require("supertest")
const app = require("../app")
const api = supertest(app)
const User = require("../models/users")

const { dbUsers } = require("./list-helper")

describe("No users in db", () => {
    beforeEach(async () => {
        await User.deleteMany({})
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

        const users = await dbUsers()
        expect(users.length).toBe(1)
        expect(users.map(user => user.username)).toContain(user.username)

    })

    afterAll(async () => {
        await mongoose.connection.close()
    })
})