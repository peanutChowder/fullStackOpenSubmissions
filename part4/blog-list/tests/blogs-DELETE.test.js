const mongoose = require("mongoose")
const supertest = require("supertest")
const app = require("../app")
const api = supertest(app)
const Blog = require("../models/blog")
const { initialBlogs, initialBlogsMissingLikes, blogsMissingTitleOrUrl } = require("./list-helper")

beforeEach(async () => {
    await Blog.deleteMany({})
}) 