import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

function FormDataAnalyse() {
  const [contact, setContact] = useState([]);
  const [form, setForm] = useState({
    full_name: "",
    user_email: "",
    user_mobile: "",
    message: "",
    status: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  const fetchContacts = () => {
    axios
      .get("http://18.130.219.171:3200/cont")
      .then((response) => setContact(response.data.data.items))
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    fetchContacts();
  }, []);

  const Delete = (id) => {
    if (window.confirm("Are you sure you want to delete the item?")) {
      axios
        .delete(`http://18.130.219.171:3200/cont/${id}`)
        .then(() => {
          setContact((prev) => prev.filter((item) => item.id !== id));
        })
        .catch((error) => console.error(error));
    }
  };

  const Edit = (id) => {
    axios
      .get(`http://18.130.219.171:3200/cont/${id}`)
      .then((response) => {
        setForm(response.data.data);
        setIsEditing(true);
      })
      .catch((error) => console.error(error));
  };

  const addingdata = () => {
    setForm({
      full_name: "",
      user_email: "",
      user_mobile: "",
      message: "",
      status: "",
    });
    setIsEditing(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      axios
        .put(`http://18.130.219.171:3200/cont/${form.id}`, form)
        .then(() => {
          fetchContacts();
        })
        .catch((error) => console.error(error));
    } else {
      axios
        .post("http://18.130.219.171:3200/cont", form)
        .then(() => {
          fetchContacts();
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <div className="container mt-4">
      <h1>CONTACT US</h1>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button type="button" className="btn btn-primary" onClick={addingdata}>
          ADD
        </button>
      </div>

      <table className="table table-success table-striped mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>PH NO</th>
            <th>MESSAGE</th>
            <th>STATUS</th>
            <th>EDIT</th>
            <th>DEL</th>
          </tr>
        </thead>
        <tbody>
          {contact.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.full_name}</td>
              <td>{item.user_email}</td>
              <td>{item.user_mobile}</td>
              <td>{item.message}</td>
              <td>{item.status}</td>
              <td>
                <button
                  onClick={() => Edit(item.id)}
                  className="btn btn-sm btn-warning"
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  onClick={() => Delete(item.id)}
                  className="btn btn-sm btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div
        className="bg-light p-4 rounded"
        style={{ width: "500px", margin: "auto", marginTop: "100px" }}
      >
        <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
          <h3>{isEditing ? "Edit Contact" : "Add Contact"}</h3>

          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              value={form.full_name}
              onChange={(e) => setForm({ ...form, full_name: e.target.value })}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              value={form.user_email}
              onChange={(e) => setForm({ ...form, user_email: e.target.value })}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Mobile</label>
            <input
              type="number"
              value={form.user_mobile}
              onChange={(e) =>
                setForm({ ...form, user_mobile: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Status</label>
            <input
              type="text"
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
              required
            />
          </div>
          <button type="submit" className="btn btn-success">
            {isEditing ? "Update" : "Save"}
          </button>
        </form>
      </div>
    </div>
  );
}
export default FormDataAnalyse;
