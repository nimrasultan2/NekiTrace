import { useState, useEffect } from "react";
import AdminNavbar from "../components/AdminNavbar";
import Footer from "../components/Footer";
import "../styles/Admin.css";

const emptyForm = 
{
  title: "",
  beneficiaryId: "",
  category: "",
  location: "",
  image: "",
  description: "",
  story: "",
  goal: "",
  raised: "",
  status: "Active",
};

const emptyBeneficiaryForm = { fullName: "", age: "", details: "", image: "" };

export default function Admin({
  setPage,
  projects,
  setProjects,
  isAdminLoggedIn,
  setIsAdminLoggedIn,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [formData, setFormData] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [isAddingNewBeneficiary, setIsAddingNewBeneficiary] = useState(false);
  const [newBeneficiary, setNewBeneficiary] = useState(emptyBeneficiaryForm);

  useEffect(() => {
    fetch("http://localhost:8080/api/beneficiaries")
      .then((res) => res.json())
      .then((data) => setBeneficiaries(data))
      .catch((err) => console.error("Failed to fetch beneficiaries:", err));
  }, []);

  function handleLogin(e) 
  {
    e.preventDefault();
    const correctEmail = "admin@nekitrace.com";
    const correctPassword = "NekiTrace#2026Secure";

    if (email === correctEmail && password === correctPassword) 
      {
      setIsAdminLoggedIn(true);
      setLoginError("");
    } 
    else 
    {
      setLoginError("Invalid email or password");
    }
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleNewBeneficiaryChange(e) {
    setNewBeneficiary({ ...newBeneficiary, [e.target.name]: e.target.value });
  }

  function handleBeneficiaryDropdownChange(e) {
    if (e.target.value === "new") {
      setIsAddingNewBeneficiary(true);
      setFormData({ ...formData, beneficiaryId: "" });
    } 
    else {
      setIsAddingNewBeneficiary(false);
      handleChange(e);
    }
  }

  function submitProject(beneficiaryId) {
    const payload = {
      title: formData.title,
      beneficiaryId: Number(beneficiaryId),
      category: formData.category,
      location: formData.location,
      image: formData.image,
      description: formData.description,
      story: formData.story,
      goal: Number(formData.goal),
      raised: Number(formData.raised),
      status: formData.status,
    };

    fetch("http://localhost:8080/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => 
        {
        if (!res.ok) throw new Error("Failed to create project");
        return res.json();
      })
      .then((newProject) => {
        setProjects([...projects, newProject]);
        resetProjectForm();
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to create project. Check the console for details.");
      });
  }

  function resetProjectForm() {
    setFormData(emptyForm);
    setNewBeneficiary(emptyBeneficiaryForm);
    setIsAddingNewBeneficiary(false);
    setEditingId(null);
    setShowForm(false);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (editingId) {
      const payload = {
        title: formData.title,
        beneficiaryId: Number(formData.beneficiaryId),
        category: formData.category,
        location: formData.location,
        image: formData.image,
        description: formData.description,
        story: formData.story,
        goal: Number(formData.goal),
        raised: Number(formData.raised),
        status: formData.status,
      };

      fetch(`http://localhost:8080/api/projects/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then((res) => {
          if (!res.ok) throw new Error("Failed to update project");
          return res.json();
        })
        .then((updatedProject) => {
          const updatedProjects = projects.map((p) =>
            p.id === editingId ? updatedProject : p,
          );
          setProjects(updatedProjects);
          resetProjectForm();
        })
        .catch((err) => {
          console.error(err);
          alert("Failed to update project. Check the console for details.");
        });
      return;
    }

    if (isAddingNewBeneficiary) {
      fetch("http://localhost:8080/api/beneficiaries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: newBeneficiary.fullName,
          age: newBeneficiary.age ? Number(newBeneficiary.age) : null,
          details: newBeneficiary.details,
          image: newBeneficiary.image,
        }),
      })
        .then((res) => {
          if (!res.ok) throw new Error("Failed to create beneficiary");
          return res.json();
        })
        .then((createdBeneficiary) => {
          setBeneficiaries([...beneficiaries, createdBeneficiary]);
          submitProject(createdBeneficiary.id);
        })
        .catch((err) => {
          console.error(err);
          alert("Failed to create beneficiary. Check the console for details.");
        });
    } else {
      submitProject(formData.beneficiaryId);
    }
  }

  function handleEdit(project) {
    setFormData({...project,beneficiaryId: project.beneficiaryId,
    });
    setEditingId(project.id);
    setShowForm(true);
    setIsAddingNewBeneficiary(false);
  }

  function handleDelete(id) {
    const confirmDelete = confirm("Delete this project?");
    if (!confirmDelete) return;

    fetch(`http://localhost:8080/api/projects/${id}`, 
    {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to delete project");
        const remainingProjects = projects.filter((p) => p.id !== id);
        setProjects(remainingProjects);
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to delete project. Check the console for details.");
      });
  }

  return (
    <>
      <AdminNavbar />

      {!isAdminLoggedIn ? (
        <section className="admin-login">
          <div className="login-wrapper">
            <div className="login-left">
              <span className="admin-badge">Administrator Portal</span>

              <h1>
                Welcome to <span>NekiTrace</span>
              </h1>

              <p>
                Manage fundraising campaigns, review donations, monitor
                progress, and keep every campaign transparent from one secure
                dashboard.
              </p>

              <div className="login-features">
                <div>✓ Manage Campaigns</div>
                <div>✓ Track Donations</div>
                <div>✓ Secure Admin Access</div>
              </div>
            </div>

            <form className="login-card" onSubmit={handleLogin}>
              <div className="login-logo">💚</div>

              <h2>NekiTrace</h2>
              <h3>Admin Login</h3>

              {loginError && <p className="login-error">{loginError}</p>}

              <label>Email Address</label>
              <input
                type="email"
                placeholder="admin@nekitrace.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label>Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button type="submit" className="login-btn">
                Login to Dashboard
              </button>
            </form>
          </div>
        </section>
      ) : (
        <section className="admin-page">
          <div className="container">
            <div className="admin-header">
              <h1>Manage Projects</h1>

              <div>
                <button
                  className="primary-btn"
                  onClick={() => {
                    resetProjectForm();
                    setShowForm(!showForm);
                  }}
                >
                  {showForm ? "Cancel" : "+ Add Project"}
                </button>

                <button
                  className="logout-btn"
                  onClick={() => setIsAdminLoggedIn(false)}
                >
                  Logout
                </button>
              </div>
            </div>

            {showForm && (
              <form className="admin-form" onSubmit={handleSubmit}>
                <input
                  name="title"
                  placeholder="Title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />

                <select
                  name="beneficiaryId"
                  value={
                    isAddingNewBeneficiary
                      ? "new"
                      : formData.beneficiaryId || ""
                  }
                  onChange={handleBeneficiaryDropdownChange}
                  required
                >
                  <option value="">Select Beneficiary</option>
                  {beneficiaries.map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.fullName}
                      {b.age ? `, ${b.age} years old` : ""}
                    </option>
                  ))}
                  <option value="new">+ Add New Beneficiary</option>
                </select>

                {isAddingNewBeneficiary && (
                  <div className="inline-beneficiary-form">
                    <input
                      name="fullName"
                      placeholder="Full Name"
                      value={newBeneficiary.fullName}
                      onChange={handleNewBeneficiaryChange}
                      required
                    />
                    <input
                      name="age"
                      type="number"
                      placeholder="Age (leave blank for groups)"
                      value={newBeneficiary.age}
                      onChange={handleNewBeneficiaryChange}
                    />
                    <input
                      name="details"
                      placeholder="Details (e.g. Student, Widow)"
                      value={newBeneficiary.details}
                      onChange={handleNewBeneficiaryChange}
                      required
                    />
                    <input
                      name="image"
                      placeholder="Image filename"
                      value={newBeneficiary.image}
                      onChange={handleNewBeneficiaryChange}
                    />
                  </div>
                )}

                <input
                  name="category"
                  placeholder="Category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                />

                <input
                  name="location"
                  placeholder="Location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />

                <input
                  name="image"
                  placeholder="Image filename"
                  value={formData.image}
                  onChange={handleChange}
                />

                <textarea
                  name="description"
                  placeholder="Short Description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />

                <textarea
                  name="story"
                  placeholder="Full Story"
                  value={formData.story}
                  onChange={handleChange}
                  required
                />

                <input
                  name="goal"
                  type="number"
                  placeholder="Goal (Rs.)"
                  value={formData.goal}
                  onChange={handleChange}
                  required
                />

                <input
                  name="raised"
                  type="number"
                  placeholder="Raised (Rs.)"
                  value={formData.raised}
                  onChange={handleChange}
                  required
                />

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="Active">Active</option>
                  <option value="Completed">Completed</option>
                </select>

                <button type="submit" className="primary-btn">
                  {editingId ? "Update" : "Create"}
                </button>
              </form>
            )}

            <table className="admin-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Beneficiary</th>
                  <th>Goal</th>
                  <th>Raised</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {projects.map((p) => (
                  <tr key={p.id}>
                    <td>{p.title}</td>
                    <td>{p.beneficiary}</td>
                    <td>Rs. {p.goal}</td>
                    <td>Rs. {p.raised}</td>
                    <td>{p.status}</td>
                    <td>
                      <button onClick={() => handleEdit(p)}>Edit</button>

                      <button onClick={() => handleDelete(p.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
