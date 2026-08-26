import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllProjects from "./pages/AllProjects";
import Auth from "./pages/Auth";
import Portfolio from "./pages/Portfolio";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
 

export default function App() {
  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/auth/admin" element={<Auth />} />
        <Route path="/Projects/admin" element={<Projects />} />
        <Route path="/AllProjects" element={<AllProjects/>} />
        
      </Routes>
    </BrowserRouter>
  );
}