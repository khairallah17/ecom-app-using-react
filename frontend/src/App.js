import logo from './logo.svg';
import './App.css';
import { ProductList } from './compenents/component.product.list';
import { ProductAddForm } from './compenents/component.product.add';
import Login from './compenents/component.login';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from './compenents/component.signup';
import ProductDetails from './compenents/component.details';
import AdminLayout from './compenents/component.adminLayout';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' Component={AdminLayout}> */}
          <Route path='/' Component={Login} />
          <Route path='/signup' Component={Signup} />
          <Route path='/products' Component={ProductList} />
          <Route path="/products/add" Component={ProductAddForm} />
          <Route path="/products/edit/:id" Component={ProductDetails} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
