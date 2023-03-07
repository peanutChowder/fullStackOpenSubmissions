const mongoose = require("mongoose")
const supertest = require("supertest")
const app = require("../app")
const api = supertest(app)
const Blog = require("../models/blog")

const initialBlogs = [
    {
        title: "jack cucumber",
        author: "woozie",
        url: "asd.wdwr.asdasd",
        likes: 53,
    },
    {
        title: "sio laaaoo",
        author: "mouse man",
        url: "up.up.up",
        likes: 1,
    },
    {
        title: "woooo",
        author: "salmon ver",
        url: "fishes.com",
        likes: 74
    },
    {
        title: "supa dopa",
        author: "woopty doo",
        url: "aaaaa.ca",
        likes: 24
    }
]

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
    console.log(response.body)
})

afterAll(async () => {
    await mongoose.connection.close()
})