import '../../assets/css/style.css';
import '../../assets/css/bootstrap.min.css';
import '../../assets/lib/animate/animate.min.css';
import '../../assets/lib/owlcarousel/assets/owl.carousel.min.css';
import '../../assets/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css';

import {Header} from "./Header";
import {Footer} from "./Footer";

const withLayout = Page => {
  return () => (
    <div>
      <Header />
      <Page />
      <Footer />
    </div>
  );
};

export default withLayout;