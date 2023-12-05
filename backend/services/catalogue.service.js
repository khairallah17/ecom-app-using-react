const Product = require('../models/Product');
const Category =  require("../models/Category")

async function getAllCategories() {
    return await Category.find()
}

async function addCategorie(categorieData) {
    return await Category.create(categorieData)
}

async function getAllProducts() {
    return await Product.find().populate("category"); 
}

async function getProductById(id){
    return await Product.findById(id).populate("category");
}

async function addProduct(productData){
    return await Product.create(productData);
}


async function deleteProductById(id){
    return await Product.findByIdAndRemove(id);
}

async function updateProduct(id, productData){
    return await Product.findByIdAndUpdate(id,productData);
}

module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    deleteProductById,
    updateProduct,
    getAllCategories,
    addCategorie
};