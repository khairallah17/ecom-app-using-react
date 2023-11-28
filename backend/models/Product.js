const mongoose= require('mongoose');
const Category = require("./Category")

//Definir le schema 
const productSchema = new mongoose.Schema({

    name: String,
    price: Number,
    category: {
        type: mongoose.Types.ObjectId,
        ref: 'Category'
    }

});

const Product=mongoose.model("Product",productSchema);
module.exports = Product;