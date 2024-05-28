import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Router>
        <div>
          NAV BAR
          <Link to={"/"}>Home</Link>
          <Link to={"/Menu"}>Menu</Link>
          <Link to={"/Contacts"}>Contact</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Contacts" element={<Contact />} />
          <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
