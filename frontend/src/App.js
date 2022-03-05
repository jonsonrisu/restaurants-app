import React,  { useState,useEffect } from "react";
import Spinner from './components/frontend/Spinner';
import { Routes, Route, BrowserRouter as Router, Navigate, Outlet } from "react-router-dom";
import Home from './components/frontend/Pages/Home/Home';
import About from './components/frontend/Pages/About';
import Booking from './components/frontend/Pages/Booking';
import Contact from './components/frontend/Pages/Contact/Contact';
import Menu from './components/frontend/Pages/Menu';
import Services from './components/frontend/Pages/Services';
import TeamMember from './components/frontend/Pages/TeamMember';
import Testimonial from './components/frontend/Pages/Testimoinal/Testimonial';
import Dashboard from './components/admin/pages/Dashboard';
import Login from './components/admin/auth/Login';
import CategoryAdd from './components/admin/pages/Category/Add';
import CategoryList from './components/admin/pages/Category/List';
import ServicesAdd from './components/admin/pages/Services/Add';
import ServicesList from './components/admin/pages/Services/List';
import PageNotFound from "./components/frontend/Pages/404-page";

function App() {
  let islogin = false;

  let user = JSON.parse(localStorage.getItem("user"));
  if(user){
    islogin = true;
  }
  else{
    islogin = false;
  }

  const PrivateWrapper = ({ auth: { isAuthenticated } }) => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/admin/login" />;
  };
  return (
    <>
      <div className="App container-xxl bg-white p-0">
        <Spinner />
        <div className="container-xxl position-relative p-0">
          <Router>
            <Routes>
              <Route exact path={"/"} params={{ status: "active" }} element={<Home />} />
              <Route exact path={"/home"} element={<Home />} />
              <Route exact path={"/services"} element={<Services />} />
              <Route exact path={"/about"} element={<About />} />
              <Route exact path={"/contact"} element={<Contact />} />
              <Route path={"/booking"} element={<Booking />} />
              <Route path={"/menu"} element={<Menu />} />
              <Route path={"/team"} element={<TeamMember />} />
              <Route path={"/testimonial"} element={<Testimonial />} />
              {/* Admin Routes */}
              <Route exact path={"/admin/login"} element={<Login />} />
              {/* Start Private Route  */}
              <Route element={<PrivateWrapper auth={{ isAuthenticated: islogin }} />}>
                <Route exact path={"/admin/dashboard"} element={<Dashboard />} />
                <Route exact path={"/admin/category/create"} element={<CategoryAdd />} />
                <Route exact path={"/admin/category"} element={<CategoryList />} />
                <Route exact path={"/admin/services/create"} element={<ServicesAdd />} />
                <Route exact path={"/admin/services"} element={<ServicesList />} />
              </Route>
              {/* End Private Route */}
              <Route path="/*" element={<PageNotFound/>} />
            </Routes>
          </Router>
        </div>

      </div>
    </>
  );
}

export default App;
