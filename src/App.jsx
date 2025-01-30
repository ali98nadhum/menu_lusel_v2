import Header from "./utils/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Footer from "./utils/Footer/Footer";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import ProductPage from "./pages/ProductPage/ProductPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={ <LandingPage/> } />
        <Route path="/category" element={ <CategoryPage/> }/>
        <Route path="category/product/:id" element={ <ProductPage/> }/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
