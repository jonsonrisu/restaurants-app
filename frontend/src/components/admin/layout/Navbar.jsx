import React,{useState,useEffect} from 'react'
import user from '../../../assets/admin/img/user.jpg'
import AuthService from '../../../services/AuthServices';
import { Navigate } from "react-router-dom";
const Navbar = () => {
    const [currentUser, setCurrentUser] = useState();
    const userData = AuthService.getCurrentUser();
    useEffect(() => {
        if(userData) {
          setCurrentUser(userData);
        }
    }, []);
    const logOut = () => {
        AuthService.logout();
        };
    return (
        <>
            <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
                <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
                    <h2 className="text-primary mb-0"><i className="fa fa-hashtag"></i></h2>
                </a>
                <a href="#" className="sidebar-toggler flex-shrink-0">
                    <i className="fa fa-bars"></i>
                </a>
                <form className="d-none d-md-flex ms-4">
                    <input className="form-control border-0" type="search" placeholder="Search" />
                </form>
                <div className="navbar-nav align-items-center ms-auto">  
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <img className="rounded-circle me-lg-2" src={user}  alt="" style={{ width: "40px", height: "40px" }} />
                            {currentUser ?  <span className="d-none d-lg-inline-flex">{currentUser.name}</span> : '' }
                        </a>
                        <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                            <a href="#" className="dropdown-item">My Profile</a>
                            <a href="#" className="dropdown-item">Settings</a>
                            <a href="/admin/login" onClick={logOut} className="dropdown-item">Log Out</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>

    )
}
export default Navbar