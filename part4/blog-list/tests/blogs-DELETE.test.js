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

test("Blog cannot be found after DELETE request", async () => {
    const blog = await Blog.findOne({title: initialBlogs[0].title})
    const deletedBlogId = blog._id.toString()
    
    await api.delete(`/api/blogs/${deletedBlogId}`)
        .expect(204)

    const result = await Blog.findOne({_id: deletedBlogId})
    expect(result).toBe(null)
})

afterAll(async () => {
    await mongoose.connection.close()
})