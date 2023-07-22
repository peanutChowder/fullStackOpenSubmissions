const blogsRouter = require("express").Router()
const Blog = require("../models/blog")
const User = require("../models/users")

blogsRouter.get("/", async (request, response) => {
    const blogs = await Blog.find({}).populate("user")

    response.json(blogs)
})

blogsRouter.post("/", async (request, response) => {
    const user = await User.findById(request.body.user)

    if (user === null) {
        response.status(400).json({error: `User with id '${request.body.user}' was not found`})
        return
    }

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
    await Blog.findByIdAndRemove(request.params.id)
        .then((deletedBlog) => {
            if (deletedBlog === null) {
                response.status(400).json({error: "Blog does not exist"})
            }

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
