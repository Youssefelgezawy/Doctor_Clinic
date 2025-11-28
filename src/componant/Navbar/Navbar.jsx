import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';



function Navbar() {
    return (

        <div className="Navbar">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Pages <span className='plus'>+</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/About-US">About Us</Link></li>
                                    <li><Link className="dropdown-item" to="/Ourteam">Our Team</Link></li>
                                    <li><Link className="dropdown-item" to="/FaQs">FaQs</Link></li>
                                    <li><Link className="dropdown-item" to="/Error">Error 404</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Contact Us</a>
                            </li>
                            <div className="icons">
                                <div className="search"><i className="bi bi-search"></i></div>
                                <div className="phone"><i className="bi bi-telephone-fill"></i><span> 01111111111</span></div>

                            </div>
                            <div className="btn">
                                <button type="button" className="btnn btn-outline">Contact us <i className="bi bi-chevron-right"></i></button>    
                            </div>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Navbar;




























