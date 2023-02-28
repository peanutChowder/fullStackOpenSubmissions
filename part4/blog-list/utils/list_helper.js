// eslint-disable-next-line no-unused-vars
const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    return blogs.map(blog => blog.likes).reduce((cumLikes, currLikes) => cumLikes + currLikes)
}

const favoriteBlog = (blogs) => {
    return blogs.reduce((mostLikedBlog, currBlog) => {
        console.log(mostLikedBlog)
        if (currBlog.likes > mostLikedBlog.likes) {
            mostLikedBlog = currBlog
        }
        return mostLikedBlog
    })
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
}