import { StrictMode } from "react";
import "./styles/global.css";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ProjectProvider } from "./context/ProjectContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>

    <AuthProvider>
        <ProjectProvider>
      <App />
      </ProjectProvider>
    </AuthProvider>
    
  </StrictMode>
);