import "bootstrap/dist/css/bootstrap.min.css";
import NavMenu from "./Components/NavMenu/NavMenu";
import Banner from "./Components/Banner/Banner";
import Products from "./Components/Products/Products";
import ContactUs from "./Components/ContactUs/ContactUs";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <NavMenu />
      <Banner />
      <Products />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
