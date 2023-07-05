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

const usersMissingUsernameOrPassword = [
    {
        username: "thedude",
        name: "jack"
    },
    {
        username: "thunder",
        name: "lightning",
    },
    {
        name: "friend",
        password: "password"
    },
    {
        name: "ball",
        password: "line"
    },
    {
        name: "hi"
    },
    {
        name: "styrange"
    }
]

const usersWithShortUsernamesOrPassword = [
    {
        username: "ab",
        name: "My user is too short",
        password: "abc"
    },
    {
        username: "12",
        name: "My username is also too short",
        password: "456"
    },
    {
        username: "person",
        name: "My password is too short",
        password: "k4"
    },
    {
        username: "hi",
        name: "My password is also too short",
        password: "]"
    },
    {
        username: "*",
        name: "both username and password are too short",
        password: "2"
    }
]

const usersWithDuplicateUsernames = [
    {
        username: "12345Dude",
        name: "dude",
        password: "password"
    },
    {
        username: "12345Dude",
        name: "lol",
        password: "123"
    },
    {
        username: "333",
        name: "person",
        password: "aaa",
    },
    {
        username: "333",
        name: "person",
        password: "aaa",
    }
]

const User = require("../models/users")

const dbUsers = async () => {
    const users = await User.find({})
    return users.map(user => user.toJSON())
}

module.exports = {
    initialBlogs, blogsMissingLikes, blogsMissingTitleOrUrl,
    usersMissingUsernameOrPassword, usersWithShortUsernamesOrPassword, usersWithDuplicateUsernames,
    dbUsers
}