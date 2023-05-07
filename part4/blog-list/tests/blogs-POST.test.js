const mongoose = require("mongoose")
const supertest = require("supertest")
const app = require("../app")
const api = supertest(app)
const Blog = require("../models/blog")
const { initialBlogs } = require("./list-helper")

beforeEach(async () => {
    await Blog.deleteMany({})
}) 

test("Post request of new blog makes blog count one and contains correct body", async () => {
    const blog = new Blog(initialBlogs[3])
    await blog.save()
    const response = await api.get("/api/blogs")
    const returnedBlog = response.body[0]

    expect(response.body.length).toBe(1)
    delete returnedBlog.id
    expect(returnedBlog).toEqual(initialBlogs[3])
})

test("Post request of blog with missing 'likes' property is assigned a value of 0 by default", async () => {
    
})

afterAll(async () => {
    await mongoose.connection.close()
})
