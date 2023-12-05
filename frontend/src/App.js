import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import { ProductList } from './compenents/component.product.list';
import { ProductAddForm } from './compenents/component.product.add';
import Login from './compenents/component.login';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from './compenents/component.signup';
import ProductDetails from './compenents/component.details';
import AdminLayout from './compenents/component.adminLayout';
import ClientLayout from './client/component.clientLayout'


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' Component={ClientLayout}>
          <Route path="products" Component={ProductList} />
        </Route>

        <Route path="/login" Component={Login}  />
        
        <Route path='/signup' Component={Signup} />
        <Route path='/admin' Component={AdminLayout}>
          <Route path='products' Component={ProductList} />
          <Route path="products/add" Component={ProductAddForm} />
          <Route path="products/edit/:id" Component={ProductDetails} />
        </Route>

      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
