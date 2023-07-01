const config = require("./utils/config")
const express = require("express")
const app = express()
const cors = require("cors")
const blogsRouter = require("./controllers/blogs")
const userRouter = require("./controllers/users")
const middleware = require("./utils/middleware") 
const logger = require("./utils/logger")
const mongoose = require("mongoose")

mongoose.set("strictQuery", false)

logger.info("Connecting to", config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI)
    .then(() => {
        logger.info("Connected to mongoDB")
    })
    .catch((error) => {
        logger.error("Error connecting to mongoDB:", error.message)
    })

app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)
app.use(middleware.errorHandler)

app.use("/api/blogs", blogsRouter)
app.use("/api/users", userRouter)

module.exports = app