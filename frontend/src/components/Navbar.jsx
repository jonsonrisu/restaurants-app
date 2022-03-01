import React from 'react'
import  {Link}  from "react-router-dom";

export const Navbar = (props) => {
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
                    <Link to={"/"} className="nav-item nav-link">Home </Link>
                    <Link to={"/about"} className="nav-item nav-link">About </Link>
                    <Link to={"/services"} className="nav-item nav-link">Service </Link>
                    <Link to={"/menu"} className="nav-item nav-link">Menu </Link>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">More</a>
                            <div className="dropdown-menu m-0">
                            <Link to={"/booking"} className="dropdown-item active">Booking</Link>
                            <Link to={"/team"}className="dropdown-item">Our Team</Link>
                            <Link to={"/testimonial"} className="dropdown-item">Testimonial</Link>
                            </div>
                        </div>
                        <Link to={"/contact"}className="nav-item nav-link">Contact</Link>
                    </div>
                    <Link to={"/booking"}className="btn btn-primary py-2 px-4">Book A Table</Link>
                </div>
            </nav>
        {/* Navbar & Hero End */}
    </>
  )
}
