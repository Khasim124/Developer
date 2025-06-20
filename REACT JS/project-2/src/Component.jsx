import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Component() {
  const [component, setComponent] = useState([]);
  const [form, setForm] = useState({
    id: "",
    fullname: "",
    email: "",
    ph_no: "",
    description: "",
    country_name: "",
  });
  const [isEdit, setIsEdit] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://192.168.1.109:3005/");
      console.log(response);
      setComponent(response.data.user);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const Delete = async (id) => {
    if (window.confirm("Are you sure you want to delete the item?")) {
      try {
        await axios.delete(`http://192.168.1.109:3005/${id}`);
        setComponent((data) => data.filter((item) => item.id !== id));
      } catch (error) {
        console.error(error);
      }
    }
  };

  const Edit = async (id) => {
    try {
      const response = await axios.get(`http://192.168.1.109:3005/${id}`);
      setForm(response.data.user);
      setIsEdit(true);
    } catch (error) {
      console.error(error);
    }
  };

  const addingData = () => {
    setForm({
      id: "",
      fullname: "",
      email: "",
      ph_no: "",
      description: "",
      country_name: "",
    });
    setIsEdit(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEdit) {
        await axios.put(`http://192.168.1.109:3005/${form.id}`, form);
      } else {
        await axios.post(`http://192.168.1.109:3005/`, form);
      }
      fetchData();
      addingData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <h1 className="none">Enquiry Form</h1>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button
            type="button"
            className="btn btn-primary"
            onClick={addingData}
          >
            ADD
          </button>
        </div>
      </div>
      <table className="table table-success table-striped mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>PH_NO</th>
            <th>Description</th>
            <th>Country_Name</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {component.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.fullname}</td>
              <td>{item.email}</td>
              <td>{item.ph_no}</td>
              <td>{item.description}</td>
              <td>{item.country_name}</td>
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
          <h3>{isEdit ? "Edit Component" : "Add Component"}</h3>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              value={form.fullname}
              onChange={(e) => setForm({ ...form, fullname: e.target.value })}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">PH_NO</label>
            <input
              type="number"
              value={form.ph_no}
              onChange={(e) => setForm({ ...form, ph_no: e.target.value })}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Country_Name</label>
            <input
              type="text"
              value={form.country_name}
              onChange={(e) =>
                setForm({ ...form, country_name: e.target.value })
              }
              required
            />
          </div>
          <button type="submit" className="btn btn-success">
            {isEdit ? "Update" : "Save"}
          </button>
        </form>
      </div>
    </div>
  );
}
