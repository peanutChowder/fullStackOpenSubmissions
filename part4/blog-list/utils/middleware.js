const logger = require("./logger")

const requestLogger = (request, response, next) => {
    logger.info("Method:", request.method)
    logger.info("Path:  ", request.path)
    logger.info("Body:  ", request.body)
    logger.info("---")
    next()
}

const errorHandler = (error, request, response, next) => {
    logger.error("Middleware:", error.message)
    if (error.name == "ValidationError" && error.message.includes("expected `username` to be unique")) {
        response.status(400).json({error: "Did not provide a unique username"})
    }

    next(error)
}

module.exports = {
    requestLogger, errorHandler
}