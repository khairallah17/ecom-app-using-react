import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

const ClientLayout = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <Link to="/" class="navbar-brand">Navbar</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link to="/products" class="nav-link active" aria-current="page">Products</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Outlet/>
    </div>
  )
}

export default ClientLayout