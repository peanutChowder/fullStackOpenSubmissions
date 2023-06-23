const mongoose = require("mongoose")
const supertest = require("supertest")
const app = require("../app")
const api = supertest(app)
const Blog = require("../models/blog")
const { initialBlogs } = require("./list-helper")


beforeEach(async () => {
    await Blog.deleteMany({})

    const blogObjects = initialBlogs.map(blog => {
        return new Blog(blog)
    })

    const promiseArray = blogObjects.map(blog => blog.save())
    await Promise.all(promiseArray)

}) 

test("GET request returns correct # of blogs, in JSON format", async () => {
    const response = await api
        .get("/api/blogs")
        .expect(200)
        .expect("Content-Type", /application\/json/)

    expect(response.body.length === initialBlogs.length)
})

test("GET request returns blog posts with 'id' property", async () => {
    const response = await api.get("/api/blogs")

    await response.body.map((blog) => {
        expect(blog.id).toBeDefined()
    })
})

test("GET request returns blog posts with 'likes' property", async () => {
    const response = await api.get("/api/blogs")

    await response.body.map((blog) => {
        expect(blog.likes).toBeDefined()
    })
})

afterAll(async () => {
    await mongoose.connection.close()
})