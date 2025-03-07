import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./Home";
import { ContactPage } from "./ContactPage";
import { AboutPage } from "./About";
import { FAQsPage } from "./FAQsPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FAQsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;