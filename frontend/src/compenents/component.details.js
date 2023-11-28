import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { deleteProductByID, editProduct, getProductById } from '../services/product.services'
import { getAllCategories } from '../services/categorie.services'

const ProductDetails = () => {
  
    const params = useParams()
  
    const [productData, setProductData] = useState({})
    const [productName, setProductName] = useState("")
    const [productPrice, setProductPrice] = useState(0)
    const [category, setCategorie] = useState(0)
    const [categories, setCategories] = useState([])

    const navigate = useNavigate()

    useEffect(() => {

        const init = async () => {
            try {
                const { data } = await getProductById(params.id)
                const res = await getAllCategories()
                setCategories(res.data.categories)
                setProductData(data)
            } catch (error) {
                console.log(error.message)
            }
        }

        init()
        // getCategories()

    }, [params.id])

    const editProductData = async (e) => {

        e.preventDefault()

        try {

            await editProduct(params.id, {name: productName, price: productPrice, category: categories[category]})
            navigate("/products")

        } catch (error) {
            console.log(error.message)
        }

    }

    const deleteProduct = async (e) => {
        e.preventDefault()

        try {

            await deleteProductByID(params.id)
            navigate("/products")

        } catch (error) {
            console.log(error.message)
        }
    }


    return (
    <div className='d-flex align-items-center justify-content-center flex-column gap-4'>
        <form onSubmit={editProductData} className='d-flex flex-column aling-items-center justify-content-center gap-4'>

            <div data-mdb-input-init className="form-outline">
                <label className="form-label" for="form1Example1">Name</label>
                <input type="text" id="form1Example1" defaultValue={productData.name} onChange={(e) => setProductName(e.target.value)} className="form-control" />
            </div>

            <div data-mdb-input-init className="form-outline">
                <label className="form-label" for="form1Example2">Price</label>
                <input defaultValue={productData.price} onChange={(e) => setProductPrice(e.target.value)} type="text" id="form1Example2" className="form-control" />
            </div>

            <div data-mdb-input-init className="form-outline">
                <label className="form-label" for="form1Example2">Price</label>
                <select name="" className='form-select' id="">
                    {
                        categories?.map(({name, _id}, index) => {
                            return (<option key={index} value={_id}>{name}</option>)
                        })
                    }
                </select>
            </div>

            <button type='submit' className='btn btn-primary'>Edit</button>

            <button onClick={(e) => deleteProduct(e)} className='btn btn-danger'>delete</button>

        </form>

    </div>
  )
}

export default ProductDetails