const mongoose = require("mongoose")
const supertest = require("supertest")
const app = require("../app")
const api = supertest(app)
const Blog = require("../models/blog")
const { initialBlogs } = require("./list-helper")

beforeEach(async () => {
    await Blog.deleteMany({})
    const blog = new Blog(initialBlogs[3])
    await blog.save()
}) 

test("Post request results in extra blog and contains correct body", async () => {
    const response = await api.get("/api/blogs")
    const blog = response.body[0]

    expect(response.body.length).toBe(1)
    delete blog.id
    expect(response.body[0]).toEqual(initialBlogs[3])
})

afterAll(async () => {
    await mongoose.connection.close()
})
