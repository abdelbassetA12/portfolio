import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import axios from "axios";
import API_BASE from "../config/api";

const ProjectContext = createContext();

export function ProjectProvider({ children }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // =========================
  // GET PROJECTS
  // =========================

  const fetchProjects = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        `${API_BASE}/api/projects`,
        {
          withCredentials: true,
        }
      );

      setProjects(res.data);
    } catch (err) {
      console.error(
        "Fetch projects error:",
        err
      ); 

      setProjects([]);
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // CREATE
  // =========================

  const createProject = async (data) => {
    const res = await axios.post(
      `${API_BASE}/api/projects`,
      data,
      {
        withCredentials: true,
      }
    );

    setProjects((prev) => [
      res.data,
      ...prev,
    ]);

    return res.data;
  };

  // =========================
  // UPDATE
  // =========================

  const updateProject = async (
    id,
    data
  ) => {
    const res = await axios.put(
      `${API_BASE}/api/projects/${id}`,
      data,
      {
        withCredentials: true,
      }
    );

    setProjects((prev) =>
      prev.map((project) =>
        project._id === id
          ? res.data
          : project
      )
    );

    return res.data;
  };

  // =========================
  // DELETE
  // =========================

  const deleteProject = async (id) => {
    await axios.delete(
      `${API_BASE}/api/projects/${id}`,
      {
        withCredentials: true,
      }
    );

    setProjects((prev) =>
      prev.filter(
        (project) =>
          project._id !== id
      )
    );
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <ProjectContext.Provider
      value={{
        projects,
        loading,
        fetchProjects,
        createProject,
        updateProject,
        deleteProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

export const useProjects = () =>
  useContext(ProjectContext);