import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./Home";
import { ContactPage } from "./ContactPage";
import { AboutPage } from "./About";
import { FAQsPage } from "./FAQsPage";
import RootLayout from "./Layout";
function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route element={<RootLayout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQsPage />} />
        </Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;