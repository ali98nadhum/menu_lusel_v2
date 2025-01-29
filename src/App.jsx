import Header from "./utils/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Footer from "./utils/Footer/Footer";
import CategoryPage from "./pages/CategoryPage/CategoryPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={ <LandingPage/> } />
        <Route path="/category" element={ <CategoryPage/> }/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
