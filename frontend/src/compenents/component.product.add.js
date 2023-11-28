import { useEffect, useState } from "react";
import { addProduct } from "../services/product.services";
import { getAllCategories } from "../services/categorie.services";
import { useNavigate } from "react-router-dom";

export function ProductAddForm(){
    const [name,setName] = useState("");
    const [price,setPrice] = useState(0);
    const [categorie, setCategorie] = useState("")
    const [categories, setCategories] = useState([])
    
    const navigate = useNavigate()

    function handlForm(event){ 
        event.preventDefault();
        const productObject = {name, price, category: categories[categorie]}
        addProduct(productObject);
        navigate("/products")
      }

      useEffect(() => {

        const fetchCategories = async () => {

          try {

            const { data } = await getAllCategories()
            setCategories(data.categories)

          } catch (error) {
            console.log(error.message)
          }

        }

        fetchCategories()

      }, [])

      return (
          <div className='d-flex align-items-center vh-100 justify-content-center flex-column gap-4'>
            <h1>Ajouter un nouveau produit</h1>
              <form onSubmit={handlForm} className='d-flex flex-column aling-items-center justify-content-center gap-4'>

                  <div data-mdb-input-init className="form-outline">
                      <label className="form-label" htmlFor="form1Example1">Name</label>
                      <input type="text" id="form1Example1" onChange={(e) => setName(e.target.value)} className="form-control" />
                  </div>

                  <div data-mdb-input-init className="form-outline">
                      <label className="form-label" htmlFor="form1Example2">Price</label>
                      <input onChange={(e) => setPrice(e.target.value)} type="text" id="form1Example2" className="form-control" />
                  </div>

                  <div data-mdb-input-init className="form-outline">
                      <label className="form-label" htmlFor="form1Example2">Price</label>
                      <select name="categorie" onChange={(e) => setCategorie(e.target.value)} className="form-select" id="">
                        {
                          categories?.map(({name, _id}, index) => (
                            <option key={index} value={index}>{name}</option>
                          ))
                        }
                      </select>
                  </div>

                  <button type='submit' className='btn btn-primary'>Ajouter</button>

              </form>

          </div>

        
      )
}
