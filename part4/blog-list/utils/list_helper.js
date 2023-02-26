// eslint-disable-next-line no-unused-vars
const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    return blogs.map(blog => blog.likes).reduce((cumLikes, currLikes) => cumLikes + currLikes)
}

module.exports = {
    dummy,
    totalLikes
}