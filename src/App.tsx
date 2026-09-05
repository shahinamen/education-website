import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Admissions from "./pages/Admissions";
import Academics from "./pages/Academics";
import Contact from "./pages/Contact";
import Enrollment from "./pages/Enroll";
import "./App.css";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/enroll" element={<Enrollment />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
