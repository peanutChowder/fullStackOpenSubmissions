const mongoose = require("mongoose")
const supertest = require("supertest")
const app = require("../app")
const api = supertest(app)
const User = require("../models/users")

const { usersMissingUsernameOrPassword, usersWithShortUsernamesOrPassword, dbUsers } = require("./list-helper")

describe("Starting with no users in db", () => {
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

    test("Sending a POST request with a missing username and/or password results in a 400 error code", async () => {
        usersMissingUsernameOrPassword.map(async (user) => {
            const response = await api.post("/api/users")
                .send(user)
                .expect(400)

            expect(response.body.error).toBe("Must provide username and password in request body")
        })
        const usersInDb = await dbUsers()
        expect(usersInDb.length).toBe(0)

    })

    test("Sending a POST request with a username and/or password that is less than 3 characters results in 400 error code", async () => {
        usersWithShortUsernamesOrPassword.map(async (user) => {
            const response = await api.post("/api/users")
                .send(user)
                .expect(400)
            expect(response.body.error).toBe("Username and Password must be at least 3 characters long.")
        })
        const usersInDb = await dbUsers()
        expect(usersInDb.length).toBe(0)
    })

    afterAll(async () => {
        await mongoose.connection.close()
    })
})