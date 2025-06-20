import { useEffect, useState } from "react";
import axios from "axios";

export default function Class() {
  const [country, setCountry] = useState([]);
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
      let response = await axios.get("http://192.168.1.114:3005/");
      let data = response.data.user;
      console.log(data);
      setCountry(data);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const editData = async (id) => {
    try {
      const response = await axios.get(`http://192.168.1.114:3005/${id}`);
      const data = response.data.user;
      setForm(data);
      setIsEdit(true);
    } catch (error) {
      return error;
    }
  };

  const addData = () => {
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

  const delData = async (id) => {
    if (window.confirm("Are you sure you want to delete the item?")) {
      try {
        await axios.delete(`http://192.168.1.114:3005/${id}`);
      } catch (error) {
        return error;
      }
      fetchData()
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEdit) {
        await axios.put(`http://192.168.1.114:3005/${form.id}`, form);
      } else {
        await axios.post(`http://192.168.1.114:3005/`, form);
      }
      fetchData();
      addData();
    } catch (error) {
      return error;
    }
  };

  return (
    <div>
      <div>
        <h1 className="none">Enquiry Form</h1>
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button type="button" className="btn btn-primary" onClick={addData}>
          ADD
        </button>
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
          {country &&
            country.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.fullname}</td>
                <td>{item.email}</td>
                <td>{item.ph_no}</td>
                <td>{item.description}</td>
                <td>{item.country_name}</td>
                <td>
                  <button
                    onClick={() => editData(item.id)}
                    className="btn btn-sm btn-warning"
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => delData(item.id)}
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
          <h3>{isEdit ? "Edit Data" : "Add Data"}</h3>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
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
            <input
              type="text"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Country</label>
            <input
              type="text"
              value={form.country_name}
              onChange={(e) =>
                setForm({ ...form, country_name: e.target.value })
              }
              required
            />
          </div>
          <div>
            <button type="submit" className="btn btn-success">
              {isEdit ? "Update" : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
