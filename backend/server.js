const express = require('express')
const cors = require("cors");
const productrouter = require("./routes/products.routes")
const mongoose = require('mongoose');
const categoriesRouter = require("./routes/category.routes")
require('dotenv').config()

const app = express();

const PORT = process.env.PORT

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());
app.use("/products",productrouter);
app.use("/categories", categoriesRouter)


mongoose.connect(process.env.DB_URL)
.then(result=>app.listen(PORT,()=>console.log(`Server running on port ${PORT}💥💥💥💥`)))
.catch(err=>console.log(err));