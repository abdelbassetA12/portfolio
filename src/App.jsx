
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import AllProjects from "./pages/AllProjects";
import Auth from "./pages/Auth";
import Portfolio from "./pages/Portfolio";
import Projects from "./pages/Projects";
import PersonalHub from "./pages/PersonalHub";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Navbar from "./components/Navbar";
import SocialMediaBar from "./components/SocialMediaBar";

export default function App() {
  return (
    <BrowserRouter>
      <SocialMediaBar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Portfolio />
            </>
          }
        />

        <Route
          path="/auth/admin"
          element={
            <>
              <Navbar />
              <Auth />
            </>
          }
        />

        <Route
          path="/Projects/admin"
          element={
            <>
              <Navbar />
              <Projects />
            </>
          }
        />

        <Route
          path="/AllProjects"
          element={
            <>
              <Navbar />
              <AllProjects />
            </>
          }
        />

        <Route
          path="/About"
          element={
            <>
              <Navbar />
              <About />
            </>
          }
        />

        <Route
          path="/PersonalHub"
          element={<PersonalHub />}
        />

        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
/*
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AllProjects from "./pages/AllProjects";
import Auth from "./pages/Auth";
import Portfolio from "./pages/Portfolio";
import Projects from "./pages/Projects";
import PersonalHub from "./pages/PersonalHub";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Portfolio />
            </>
          }
        />

        <Route
          path="/auth/admin"
          element={
            <>
              <Navbar />
              <Auth />
            </>
          }
        />

        <Route
          path="/Projects/admin"
          element={
            <>
              <Navbar />
              <Projects />
            </>
          }
        />

        <Route
          path="/AllProjects"
          element={
            <>
              <Navbar />
              <AllProjects />
            </>
          }
        />

        <Route
          path="/About"
          element={
            <>
              <Navbar />
              <About />
            </>
          }
        />

        <Route
          path="/PersonalHub"
          element={<PersonalHub />}
        />
       

        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
            </>
          }
        />
      </Routes>
       
    </BrowserRouter>
  );
}
  */

/*
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllProjects from "./pages/AllProjects";
import Auth from "./pages/Auth";
import Portfolio from "./pages/Portfolio";
import Projects from "./pages/Projects";
import PersonalHub from "./pages/PersonalHub";
import About from "./pages/About";
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
        <Route path="/About" element={<About/>} />
        <Route path="/PersonalHub" element={<PersonalHub/>} />
        
      </Routes>
    </BrowserRouter>
  );
}
  */