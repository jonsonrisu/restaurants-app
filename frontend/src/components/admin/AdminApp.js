import React from 'react'
import '../../assets/admin/lib/owlcarousel/assets/owl.carousel.min.css';
import '../../assets/admin/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css';
import '../../assets/admin/lib/animate/animate.min.css';
import '../../assets/admin/css/bootstrap.min.css';
import '../../assets/admin/css/style.css';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Login  } from './components/admin/auth/Login';
import Spinner from '../frontend/Spinner';

const AdminApp = () => {
  return (
    <>
    <div className="App container-xxl bg-white p-0">
    <Spinner />
    <Router>
      <Routes>
      <Route path={"/admin/login"} element={<AdminLogin />} />
      <Route path={"/admin/login"} element={<AdminLogin />} />

    </Routes>
    </Router>
    </div>
    </>

  )
}

export default AdminApp