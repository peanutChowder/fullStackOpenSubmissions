const blogsRouter = require("express").Router()
const Blog = require("../models/blog")

blogsRouter.get("/", async (request, response) => {
    const blogs = await Blog.find({})

    response.json(blogs)
})

blogsRouter.post("/", async (request, response) => {
    const blog = new Blog(request.body)

    if (blog.likes === undefined) {
        blog.likes = 0
    }

    if (blog.title === undefined || blog.url === undefined) {
        response.status(400).json({error: "Blog title and url must be defined"})
        return
    }

    const result = await blog.save()

    response.status(201).json(result)
})

blogsRouter.delete("/:id", async (request, response) => {
    Blog.findByIdAndRemove(request.params.id)
        .then(() => {
            response.status(204).end()
        })
}) 

blogsRouter.put("/:id", async (request, response) => {
    const newBlog = request.body
    Blog.findByIdAndUpdate(request.params.id, newBlog, {new: true})
        .then((updatedBlog) => {
            response.json(updatedBlog)
        })
})
    
module.exports = blogsRouter
