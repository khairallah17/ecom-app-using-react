const loginService = require("../services/login.service")
const User = require("../models/User")

const addUser = async (req, res) => {
    
    try {

        const user = await loginService.saveUser(req.body)

        return res.status(201).json(user)

    } catch (error) {
        return res.status(500).json({error: error.message})
    }

}

module.exports = {
    addUser
}