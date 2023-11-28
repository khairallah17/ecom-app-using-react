const express = require("express")
const { addCategorie, getAllCategories } = require("../controllers/category.controllers")

const router = express.Router()

router.route("/")
        .get(getAllCategories)
        .post(addCategorie)

module.exports = router