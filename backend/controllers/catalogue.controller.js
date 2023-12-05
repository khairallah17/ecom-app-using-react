const catalogueService = require("../services/catalogue.service")

async function getAllProducts(req,res){
    try{
        const products = await catalogueService.getAllProducts(); 
        res.status(200).json(products);
    }catch(error){
        
        res.status(500).send('error dans le serveur');
    }
}

async function getProductById(req,res){
    const idP=req.params.id;
    try{
        const product= await catalogueService.getProductById(idp);
        res.status(200).json(product);
    }catch(error){
        res.status(500).send('error dans le serveur');
    }
}

async function addProduct(req,res){
    try{
        const product = await catalogueService.addProduct(req.body);
        res.status(201).json(product);
    }catch(error){
        res.status(500).send('error d ajout');
    }
}


async function deleteProductById(req,res){
    const idp = req.params.id;
    try{
        const product = await catalogueService.deleteProductById(idp);
        res.status(200).json(product);
    }catch(error){
        console.log(error)
        res.status(500).send('error de suppression');
    }
}


async function updateProduct(req,res){
    const idp = req.params.id;
    await catalogueService.updateProduct(idp, req.body);
    res.json("Le produit a été bien modifié");
}

module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    deleteProductById,
    updateProduct
}