import Header from "./utils/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element="" />
      </Routes>
    </Router>
  );
}

export default App;
