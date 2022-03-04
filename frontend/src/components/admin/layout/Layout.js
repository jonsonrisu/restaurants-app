import '../../../assets/admin/lib/owlcarousel/assets/owl.carousel.min.css';
import '../../../assets/admin/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css';
import '../../../assets/lib/animate/animate.min.css';
import '../../../assets/admin/css/bootstrap.min.css';
import '../../../assets/admin/css/style.css';
import Navbar from "./Navbar";
import SideBar from "./Sidebar";
import Footer from "./Footer";


const adminLayout = Page => {
  return () => (
    <>
      <div className="sidebar pe-4 pb-3">
      <SideBar />
      </div>
      <div className="content">
      <Navbar />
      <Page />
      <Footer />
      </div>
    </>
  );
};

export default adminLayout;