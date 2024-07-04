import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import { useLocation } from 'react-router-dom'

const Navbar = () => {
  // let location = useLocation()
  const navigate = useNavigate()

  const handleLogout =()=>{
    localStorage.removeItem('admintoken')
    navigate("/login")
  }

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>Admin Docschat</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                </ul>
                {( !localStorage.getItem('admintoken')) ?"":
                <div className="btn-group">
                <button type="button" className="btn btn-secondary dropdown-toggle mx-2 me-2" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                <i className="fa-solid fa-user me-2" style={{color: "#FFD43B"}}></i>Admin
                </button>
                <ul className="dropdown-menu dropdown-menu-lg-end">
                  <li><button className="dropdown-item" onClick={handleLogout} type="button">Logout</button></li>
                </ul>
              </div>
              }
              </div>
            </div>
            </nav>
      
    </div>
  )
}

export default Navbar
