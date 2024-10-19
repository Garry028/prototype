import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import BenefitsSection from "./components/BenefitsSection.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import MainSection from "./components/MainSection.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <Header />
      <MainSection />
      <BenefitsSection />
      <Footer />
    </BrowserRouter>
  </>
);
