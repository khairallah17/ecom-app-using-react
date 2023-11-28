const Category =  require("../models/Category")

async function getAllCategories(req, res) {
    try {

        const categories = await Category.find()
        res.status(200).json({categories})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

async function addCategorie(req, res) {
    try {

        await Category.create(req.body)
        res.sendStatus(201)

    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = {
    getAllCategories,
    addCategorie
}