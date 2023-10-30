import Header from "../Layouts/Header/Header";
import Footer from "../Layouts/Footer/Footer";

const DefaultLayout = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);

export default DefaultLayout;
