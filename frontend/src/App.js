import './App.css';
import './assets/css/style.css';
import './assets/css/bootstrap.min.css';
import './assets/lib/animate/animate.min.css';
import './assets/lib/owlcarousel/assets/owl.carousel.min.css';
import './assets/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css';

import { Navbar } from './components/Navbar';
import Spinner from './components/Spinner';
import { Footer } from './components/Footer';

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Booking from './components/Pages/Booking';
import Contact from './components/Pages/Contact';
import { Menu } from './components/Pages/Menu';
import Services from './components/Pages/Services';
import TeamMember from './components/Pages/TeamMember';

function App() {
  return (
    <div className="App container-xxl bg-white p-0">
      <Spinner />
      <div className="container-xxl position-relative p-0">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path={"/"} params={{ status:"active" }} element={<Home />} />
            <Route exact path={"/home"} element={<Home />} />
            <Route exact path="/services" element={<Services/>} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" el ement={<Contact />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/team" element={<TeamMember />} />

          </Routes>
        </Router>
        <Footer/>

      </div>
    </div>
  );
}

export default App;
