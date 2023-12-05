import {useEffect ,useState} from "react";
import { Link } from "react-router-dom";
import { deleteProductByID, getAllProducts } from "../services/product.services";
import { useNavigate } from "react-router-dom";

export function ProductList(){

    const [products,setProducts] = useState([]);

    const navigate = useNavigate()

    useEffect(()=>{
      fetchProducts();
    },[])
  
    async function fetchProducts(){
      const res=await getAllProducts()
      setProducts(res.data);
    }

    const toProductId = (id) => {
      navigate(`/products/edit/${id}`)
    }

  return (
    <div className="d-flex gap-4 flex-column vh-100 p-5 w-100">  
      <h1 className="text-start w-100">List Des Produits</h1>
      <div className="table-wrapper">
        <table class="table">
            <thead>
              <tr>
                <th scope="col">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  </div>
                </th>
                <th scope="col">Nom</th>
                <th scope="col">Prix</th>
                <th scope="col">category</th>
              </tr>
            </thead>
            <tbody>
                {
                  products && products.map((item, key)=>{
                    return (
                      <tr role="button" onClick={() => toProductId(item._id)} key={key}>
                          <th scope="row">
                            <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            </div>
                          </th>
                          <td>{item.name}</td>
                          <td>{item.price}</td>
                          <td>{item.category.name}</td>
                      </tr>
                    )
                  })
                }
            </tbody>
        </table>
      </div>
    </div>
  );

}