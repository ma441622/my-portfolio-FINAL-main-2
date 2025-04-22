import "./styles/styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Projects from "./pages/projects.jsx";
import Contact from "./pages/contact.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
