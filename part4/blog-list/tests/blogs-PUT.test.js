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

    const promises = blogObjects.map(blog => blog.save())
    await Promise.all(promises)
}) 

test("PUT request can update a blog's likes by id", async () => {
    const blog = await Blog.findOne({title: initialBlogs[0].title})
    const blogId = blog._id.toString()
    const newBlog = {
        ...blog,
        likes: 99
    }

    const response = await api.put(`/api/blogs/${blogId}`)
        .send(newBlog)

    console.log(response.body)

    // expect(updatedBlog.likes).toBe(99)
})

afterAll(async () => {
    await mongoose.connection.close()
})