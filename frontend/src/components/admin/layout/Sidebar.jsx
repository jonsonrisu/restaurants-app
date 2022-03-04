import user from '../../../assets/admin/img/user.jpg'
import React,{useState,useEffect} from 'react'
import AuthService from '../../../services/AuthServices';
import  {NavLink }  from "react-router-dom";

const Sidebar = () => {
    const [currentUser, setCurrentUser] = useState();
    const userData = AuthService.getCurrentUser();
    useEffect(() => {
        if(userData) {
          setCurrentUser(userData);
        }
    }, []);
    return (
    <>
        <div className="sidebar pe-4 pb-3">
            <nav className="navbar bg-light navbar-light">
                <a href="/admin/dashboard" className="navbar-brand mx-4 mb-3">
                    <h3 className="text-primary"><i className="fa fa-hashtag me-2"></i>Restoran</h3>
                </a>
                <div className="d-flex align-items-center ms-4 mb-4">
                    <div className="position-relative">
                        <img className="rounded-circle" src={user} alt="" style={{ width: "40px", height: "40px" }} />
                        <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                    </div>
                    <div className="ms-3">
                       { currentUser ? <h6 className="mb-0">{currentUser.name}</h6> : ''} 
                        <span>Admin</span>
                    </div>
                </div>
                <div className="navbar-nav w-100">
                <NavLink to="/admin/dashboard" className="nav-item nav-link"><i className="fa fa-tachometer-alt me-2"></i>Dashboard</NavLink>
                    <div className="nav-item dropdown">
                        <NavLink to="/admin/category" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fa fa-laptop me-2"></i>Categories </NavLink>
                        <div className="dropdown-menu bg-transparent border-0">
                            <NavLink to="/admin/category" className="dropdown-item mx-2"><i className="fa fa-list me-2"></i>List</NavLink>
                            <NavLink to="/admin/category/create" className="dropdown-item mx-2"><i className="fa fa-plus me-2"></i>Add</NavLink>
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <NavLink to="/admin/services" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fa fa-wrench me-2"></i>Services</NavLink>
                        <div className="dropdown-menu bg-transparent border-0">
                            <NavLink to="/admin/services"  className="dropdown-item mx-2"><i className="fa fa-list me-2"></i>List</NavLink>
                            <NavLink to="/admin/services/create" className="dropdown-item mx-2"><i className="fa fa-plus me-2"></i>Add</NavLink>
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <a href="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fa fa-th me-2"></i>Products</a>
                        <div className="dropdown-menu bg-transparent border-0">
                        <NavLink to="/admin/products" className="dropdown-item mx-2"><i className="fa fa-list me-2"></i>List</NavLink>
                        <NavLink to="/admin/products/create" className="dropdown-item mx-2"><i className="fa fa-plus me-2"></i>Add</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </>
    )
}
export default Sidebar