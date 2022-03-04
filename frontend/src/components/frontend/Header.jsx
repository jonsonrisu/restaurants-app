import React from 'react'
import  {Link,NavLink }  from "react-router-dom";

export const Header = (props) => {

  return (
    <>
       {/* Navbar & Hero Start  */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
                <a href="" className="navbar-brand p-0">
                    <h1 className="text-primary m-0"><i className="fa fa-utensils me-3"></i>Restoran</h1>
                   {/* <img src="img/logo.png" alt="Logo"> */}
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0 pe-4">
                    <NavLink to={"/"} className="nav-item nav-link">Home </NavLink>
                    <NavLink to={"/about"} className="nav-item nav-link">About </NavLink>
                    <NavLink to={"/services"} className="nav-item nav-link">Service </NavLink>
                    <NavLink to={"/menu"} className="nav-item nav-link">Menu </NavLink>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">More</a>
                            <div className="dropdown-menu m-0">
                            <Link to={"/booking"} className="dropdown-item active">Booking</Link>
                            <Link to={"/team"}className="dropdown-item">Our Team</Link>
                            <Link to={"/testimonial"} className="dropdown-item">Testimonial</Link>
                            </div>
                        </div>
                        <NavLink to={"/contact"}className="nav-item nav-link">Contact</NavLink>
                    </div>
                    <NavLink to={"/booking"}className="btn btn-primary py-2 px-4">Book A Table</NavLink>
                </div>
            </nav>
        {/* Navbar & Hero End */}
    </>
  )
}
