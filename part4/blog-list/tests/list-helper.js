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

const blogsMissingLikes = [
    {
        title: "missing likes property",
        author: "lorem ipsem",
        url: "something.com"
    }
]

const blogsMissingTitleOrUrl = [
    {
        author: "woozie",
        url: "asd.wdwr.asdasd",
        likes: 53,
    },
    {
        author: "mouse man",
        likes: 1,
    },
    {
        title: "woooo",
        author: "salmon ver",
        likes: 74
    },
    {
        author: "woopty doo",
        likes: 24
    }
]

const User = require("../models/users")

const dbUsers = async () => {
    const users = await User.find({})
    return users.map(user => user.toJSON())
}

module.exports = {
    initialBlogs, blogsMissingLikes, blogsMissingTitleOrUrl,
    dbUsers
}