import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

const AdminLayout = ({children}) => {

  const menu = [
    {title: "Acceuille", icon: "bi bi-house", active: true},
    {title: "Orders", icon: "bi bi-bag-check-fill", active: false},
    {title: "Produits", icon: "bi bi-cart4", active: false},
    {title: "Clients", icon: "bi bi-people", active: false},
  ]

  return (
    <div className='d-flex'>
        <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark admin-menu">
          <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <span class="fs-4">Sidebar</span>
          </a>
          <hr/>
          <ul class="nav nav-pills flex-column mb-auto row-gap-2">

          {
            menu.map(({title, icon, active}, index) => (
              <li class="nav-item" key={index}>
                <Link to={`/`} className={`${active === true ? "active" : "text-white"} nav-link d-flex align-items-center justify-content-between`} aria-current="page">
                  <i className={icon} />
                  <span className='text-start w-75'>
                    {title}
                  </span>
                </Link>
              </li>
            ))
          }

          </ul>
          <hr/>
          <div class="dropdown">
            <a href="/" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="" alt="" width="32" height="32" class="rounded-circle me-2"/>
              <strong>khairallah17</strong>
            </a>
            <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
              <li><a class="dropdown-item" href="/">New project...</a></li>
              <li><a class="dropdown-item" href="/">Settings</a></li>
              <li><a class="dropdown-item" href="/">Profile</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="/">Sign out</a></li>
            </ul>
          </div>
        </div> 
          <Outlet/>
    </div>
  )
}

export default AdminLayout