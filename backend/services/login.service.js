const bcrypt = require("bcrypt")
const User = require("../models/User")

async function saveUser(userData) {
    console.log(userData)
    const salt = await bcrypt.genSalt(10)
    userData.password = await bcrypt.hash(userData.password, salt)
    return await User.create(userData)
}

module.exports = {
    saveUser
}