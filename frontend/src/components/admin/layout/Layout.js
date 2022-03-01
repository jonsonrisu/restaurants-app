import Navbar from "./Navbar";
import SideBar from "./Sidebar";
import Footer from "./Footer";

import '../../../assets/admin/lib/owlcarousel/assets/owl.carousel.min.css';
import '../../../assets/admin/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css';
import '../../../assets/lib/animate/animate.min.css';
import '../../../assets/admin/css/bootstrap.min.css';
import '../../../assets/admin/css/style.css';

const adminLayout = Page => {
  return () => (
    <>
      <div class="sidebar pe-4 pb-3">
     
      <SideBar />
      </div>
      <div class="content">
      <Navbar />
     
      <Page />
      <Footer />
      </div>
    </>
  );
};

export default adminLayout;