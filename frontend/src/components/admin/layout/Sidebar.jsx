import React from 'react'
import user from '../../../assets/admin/img/user.jpg'
const Sidebar = () => {
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
                        <h6 className="mb-0">Jhon Doe</h6>
                        <span>Admin</span>
                    </div>
                </div>
                <div className="navbar-nav w-100">
                    <a href="/admin/dashboard" className="nav-item nav-link active"><i className="fa fa-tachometer-alt me-2"></i>Dashboard</a>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fa fa-laptop me-2"></i>Categories</a>
                        <div className="dropdown-menu bg-transparent border-0">
                            <a href="/admin/category" className="dropdown-item mx-2"><i className="fa fa-list me-2"></i>List</a>
                            <a href="/admin/category/create" className="dropdown-item mx-2"><i className="fa fa-plus me-2"></i>Add</a>
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fa fa-wrench me-2"></i>Services</a>
                        <div className="dropdown-menu bg-transparent border-0">
                            <a href="/admin/services" className="dropdown-item mx-2"><i className="fa fa-list me-2"></i>List</a>
                            <a href="/admin/services/create" className="dropdown-item mx-2"><i className="fa fa-plus me-2"></i>Add</a>
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fa fa-th me-2"></i>Products</a>
                        <div className="dropdown-menu bg-transparent border-0">
                            <a href="/admin/products" className="dropdown-item mx-2"><i className="fa fa-list me-2"></i>List</a>
                            <a href="/admin/products/create" className="dropdown-item mx-2"><i className="fa fa-plus me-2"></i>Add</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </>
    )
}
export default Sidebar