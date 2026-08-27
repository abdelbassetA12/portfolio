import { useState } from "react";
import { useProjects } from "../context/ProjectContext";

export default function Projects() {
  const [imageFile, setImageFile] = useState(null);
  const {
    projects,
    loading,
    createProject,
    updateProject,
    deleteProject,
  } = useProjects();

  const emptyForm = {
    title: "",
    category: "",
    description: "",
    //image: "",
    url: "",
    tags: "",
  };

  const [form, setForm] =
    useState(emptyForm);

  const [editingId, setEditingId] =
    useState(null);

  const [error, setError] =
    useState("");

    const handleImageChange = (e) => {
  setImageFile(e.target.files[0] || null);
};

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // =========================
  // SUBMIT
  // =========================
const handleSubmit = async (e) => {
  e.preventDefault();

  setError("");

  try {
    const data = new FormData();

    data.append("title", form.title);
    data.append("category", form.category);
    data.append("description", form.description);
    data.append("url", form.url);

    const tags = form.tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);

    tags.forEach((tag) => {
      data.append("tags", tag);
    });

    if (imageFile) {
      data.append("image", imageFile);
    }

    if (editingId) {
      await updateProject(editingId, data);
    } else {
      await createProject(data);
    }

    setForm(emptyForm);
    setImageFile(null);
    setEditingId(null);
  } catch (err) {
    setError(
      err.response?.data?.error ||
        "Something went wrong"
    );
  }
};
/*
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    try {
      const data = {
        ...form,

        tags: form.tags
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean),
      };

      if (editingId) {
        await updateProject(
          editingId,
          data
        );
      } else {
        await createProject(data);
      }

      setForm(emptyForm);
      setEditingId(null);
    } catch (err) {
      setError(
        err.response?.data?.error ||
          "Something went wrong"
      );
    }
  };*/

  // =========================
  // EDIT
  // =========================
const handleEdit = (project) => {
  setEditingId(project._id);

  setForm({
    title: project.title || "",
    category: project.category || "",
    description: project.description || "",
    url: project.url || "",
    tags: project.tags?.join(", ") || "",
  });

  setImageFile(null);

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
/*
  const handleEdit = (project) => {
    setEditingId(project._id);

    setForm({
      title: project.title || "",
      category: project.category || "",
      description:
        project.description || "",
      image: project.image || "",
      url: project.url || "",
      tags:
        project.tags?.join(", ") || "",
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };*/

  // =========================
  // CANCEL
  // =========================
const cancelEdit = () => {
  setEditingId(null);
  setForm(emptyForm);
  setImageFile(null);
  setError("");
};
/*
  const cancelEdit = () => {
    setEditingId(null);
    setForm(emptyForm);
    setError("");
  };*/


  // =========================
  // DELETE
  // =========================

  const handleDelete = async (id) => {
    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this project?"
      );

    if (!confirmDelete) return;

    try {
      await deleteProject(id);
    } catch (err) {
      setError(
        err.response?.data?.error ||
          "Unable to delete project"
      );
    }
  };

  return (
    <section className="projects-page">

      <div className="projects-container">

        {/* =========================
            HEADER
        ========================= */}

        <div className="page-header">
          <div>
            <span>Portfolio</span>

            <h1>
              {editingId
                ? "Edit Project"
                : "My Projects"}
            </h1>

            <p>
              Add and manage your projects.
            </p>
          </div>
        </div>

        {/* =========================
            FORM
        ========================= */}

        <form
          className="project-form"
          onSubmit={handleSubmit}
        >

          <h2>
            {editingId
              ? "Edit Project"
              : "Add New Project"}
          </h2>

          {error && (
            <div className="form-error">
              {error}
            </div>
          )}

          <div className="form-grid">

            <div className="form-group">
              <label>
                Project Title
              </label>

              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Task Manager Pro"
                required
              />
            </div>

            <div className="form-group">
              <label>
                Category
              </label>

              <input
                type="text"
                name="category"
                value={form.category}
                onChange={handleChange}
                placeholder="Web Application"
                required
              />
            </div>

            <div className="form-group full">
              <label>
                Description
              </label>

              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Describe your project..."
                rows="5"
              />
            </div>

            <div className="form-group">
  <label>Project Image</label>

  <input
    type="file"
    name="image"
    accept="image/*"
    onChange={handleImageChange}
  />

  {imageFile && (
    <small>
      Selected: {imageFile.name}
    </small>
  )}
</div>

            <div className="form-group">
              <label>
                Image URL
              </label>

              <input
                type="url"
                name="image"
                value={form.image}
                onChange={handleChange}
                placeholder="https://..."
              />
            </div>

            <div className="form-group">
              <label>
                Project URL
              </label>

              <input
                type="url"
                name="url"
                value={form.url}
                onChange={handleChange}
                placeholder="https://..."
              />
            </div>

            <div className="form-group full">
              <label>
                Tags
              </label>

              <input
                type="text"
                name="tags"
                value={form.tags}
                onChange={handleChange}
                placeholder="React, Node.js, MongoDB"
              />

              <small>
                Separate tags with commas.
              </small>
            </div>

          </div>

          <div className="form-actions">

            <button
              type="submit"
              className="primary-btn"
            >
              {editingId
                ? "Update Project"
                : "Add Project"}
            </button>

            {editingId && (
              <button
                type="button"
                className="secondary-btn"
                onClick={cancelEdit}
              >
                Cancel
              </button>
            )}

          </div>

        </form>

        {/* =========================
            PROJECTS
        ========================= */}

        <div className="projects-list">

          <div className="list-header">
            <h2>
              Your Projects
            </h2>

            <span>
              {projects.length} projects
            </span>
          </div>

          {loading ? (
            <div className="empty">
              Loading projects...
            </div>
          ) : projects.length === 0 ? (
            <div className="empty">
              You don't have any projects yet.
            </div>
          ) : (
            <div className="project-grid">

              {projects.map(
                (project) => (
                  <div
                    className="project-item"
                    key={project._id}
                  >

                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.title}
                      />
                    )}

                    <div className="project-content">

                      <span className="category">
                        {project.category}
                      </span>

                      <h3>
                        {project.title}
                      </h3>

                      <p>
                        {project.description}
                      </p>

                      <div className="tags">
                        {project.tags?.map(
                          (tag, index) => (
                            <span key={index}>
                              {tag}
                            </span>
                          )
                        )}
                      </div>

                      <div className="project-actions">

                        {project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            View
                          </a>
                        )}

                        <button
                          onClick={() =>
                            handleEdit(project)
                          }
                        >
                          Edit
                        </button>

                        <button
                          className="delete-btn"
                          onClick={() =>
                            handleDelete(
                              project._id
                            )
                          }
                        >
                          Delete
                        </button>

                      </div>

                    </div>

                  </div>
                )
              )}

            </div>
          )}

        </div>

      </div>

      <style>{`

        .projects-page {
          min-height: 100vh;
          padding: 120px 20px 80px;
          background: #070B16;
          color: white;
        }

        .projects-container {
          max-width: 1200px;
          margin: auto;
        }

        .page-header {
          margin-bottom: 40px;
        }

        .page-header span {
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 13px;
          font-weight: 700;
        }

        .page-header h1 {
          margin: 10px 0;
          font-size: 42px;
        }

        .page-header p {
          color: #8d95a8;
        }

        .project-form {
          background: #0d1322;
          border: 1px solid #1c2638;
          border-radius: 18px;
          padding: 30px;
          margin-bottom: 60px;
        }

        .project-form h2 {
          margin-top: 0;
          margin-bottom: 25px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group.full {
          grid-column: 1 / -1;
        }

        .form-group label {
          font-size: 14px;
          font-weight: 600;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          box-sizing: border-box;
          padding: 13px 15px;
          border-radius: 10px;
          border: 1px solid #263149;
          background: #080d19;
          color: white;
          outline: none;
          font-size: 14px;
        }

        .form-group textarea {
          resize: vertical;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: var(--primary);
        }

        .form-group small {
          color: #70798d;
        }

        .form-actions {
          display: flex;
          gap: 12px;
          margin-top: 25px;
        }

        .primary-btn,
        .secondary-btn {
          border: 0;
          border-radius: 10px;
          padding: 12px 22px;
          cursor: pointer;
          font-weight: 600;
        }

        .primary-btn {
          background: var(--primary);
          color: white;
        }

        .secondary-btn {
          background: #202a3d;
          color: white;
        }

        .form-error {
          background: #3a1720;
          color: #ff8c9b;
          padding: 12px;
          border-radius: 10px;
          margin-bottom: 20px;
        }

        .list-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
        }

        .list-header h2 {
          margin: 0;
        }

        .list-header span {
          color: #7f899d;
        }

        .project-grid {
          display: grid;
          grid-template-columns:
            repeat(
              auto-fit,
              minmax(300px, 1fr)
            );
          gap: 25px;
        }

        .project-item {
          overflow: hidden;
          background: #0d1322;
          border: 1px solid #1c2638;
          border-radius: 16px;
        }

        .project-item img {
          width: 100%;
          height: 190px;
          object-fit: cover;
          display: block;
        }

        .project-content {
          padding: 20px;
        }

        .category {
          color: var(--primary);
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .project-content h3 {
          margin: 8px 0;
        }

        .project-content p {
          color: #8992a5;
          line-height: 1.6;
          font-size: 14px;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin: 15px 0;
        }

        .tags span {
          padding: 5px 9px;
          border-radius: 6px;
          background: #182236;
          color: #aeb7c8;
          font-size: 12px;
        }

        .project-actions {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-top: 18px;
        }

        .project-actions button,
        .project-actions a {
          border: 0;
          border-radius: 8px;
          padding: 8px 13px;
          background: #1a2437;
          color: white;
          text-decoration: none;
          cursor: pointer;
          font-size: 13px;
        }

        .project-actions .delete-btn {
          background: #3a1720;
          color: #ff8c9b;
        }

        .empty {
          padding: 50px;
          text-align: center;
          color: #7f899d;
          background: #0d1322;
          border: 1px solid #1c2638;
          border-radius: 15px;
        }

        @media (max-width: 700px) {

          .projects-page {
            padding: 100px 15px 60px;
          }

          .page-header h1 {
            font-size: 32px;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }

          .form-group.full {
            grid-column: auto;
          }

        }

      `}</style>

    </section>
  );
}