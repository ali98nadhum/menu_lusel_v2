import Header from "./utils/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Footer from "./utils/Footer/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={ <LandingPage/> } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
