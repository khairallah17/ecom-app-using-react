const loginControllers = require("../controllers/login.controller")
const router = require("express").Router()

router.route("/")
        .post(loginControllers.addUser)

module.exports = router