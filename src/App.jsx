import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllProjects from "./pages/AllProjects";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
 

export default function App() {
  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/AllProjects" element={<AllProjects/>} />
        
      </Routes>
    </BrowserRouter>
  );
}