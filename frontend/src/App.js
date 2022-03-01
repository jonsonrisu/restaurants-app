

import Spinner from './components/frontend/Spinner';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from './components/frontend/Pages/Home/Home';
import About from './components/frontend/Pages/About';
import Booking from './components/frontend/Pages/Booking';
import Contact from './components/frontend/Pages/Contact/Contact';
import Menu  from './components/frontend/Pages/Menu';
import Services from './components/frontend/Pages/Services';
import TeamMember from './components/frontend/Pages/TeamMember';
import Testimonial from './components/frontend/Pages/Testimoinal/Testimonial';
import Dashboard from './components/admin/pages/Dashboard';
import Login from './components/admin/auth/Login';
function App() {
  return (
    <>
    <div className="App container-xxl bg-white p-0">
    <Spinner />
    <div className="container-xxl position-relative p-0">
      <Router>
        <Routes>
          <Route exact path={"/"} params={{ status:"active" }} element={<Home />} />
          <Route exact path={"/home"} element={<Home />} />
          <Route exact path={"/services"} element={<Services/>} />
          <Route exact path={"/about"} element={<About />} />
          <Route exact path={"/contact"} element={<Contact />} />
          <Route path={"/booking"} element={<Booking />} />
          <Route path={"/menu"} element={<Menu />} />
          <Route path={"/team"} element={<TeamMember />} />
          <Route path={"/testimonial"} element={<Testimonial />} />

          {/* Admin Routes */}
          <Route path={"/admin/login"} element={<Login />} />
          <Route path={"/admin/dashboard"} element={<Dashboard />} />

        </Routes>
      </Router>
    </div>
  
  </div>
  </>
  );
}

export default App;
