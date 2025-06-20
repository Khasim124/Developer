import React, { useEffect, useState } from "react";
import {
  EditPageList,
  PutPageList,
  PostgPageList,
} from "../ServiceComponents/Component";

function Form({ mode, id, Fetchdata }) {
  const [form, setForm] = useState(null);

  const Edit = async (id) => {
    let data = await EditPageList(id);
    setForm(data);
  };

  useEffect(() => {
    if (mode === "edit") {
      Edit(id);
    } else {
      setForm("");
    }
  }, [id, mode]);

  const handlesub = async (e) => {
    e.preventDefault();
    if (mode === "edit") {
      await PutPageList(form);
      Fetchdata();
      setForm("");
    } else {
      await PostgPageList(form);
      Fetchdata();
    }
  };

  return (
    <div
      className="bg-light p-4 rounded"
      style={{ width: "500px", margin: "auto", marginTop: "100px" }}
    >
      <form onSubmit={handlesub} style={{ textAlign: "center" }}>
        <h1>{mode === "add" ? "Add" : "Edit"} DATA</h1>
        <div className="mb-3">
          <span className="form-label">NAME</span>
          <input
            type="text"
            className="form-control"
            id="fullName"
            value={form && form.full_name}
            onChange={(e) => setForm({ ...form, full_name: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <span className="form-label">EMAIL</span>
          <input
            type="email"
            className="form-control"
            id="user_email"
            value={form && form.user_email}
            onChange={(e) => setForm({ ...form, user_email: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <span className="form-label">PHNO</span>
          <input
            type="number"
            className="form-control"
            id="user_mobile"
            value={form && form.user_mobile}
            onChange={(e) => setForm({ ...form, user_mobile: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <span className="form-label">MESSAGE</span>
          <input
            type="textarea"
            className="form-control"
            id="message"
            value={form && form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <span className="form-label">STATUS</span>
          <input
            type="text"
            className="form-control"
            id="status"
            value={form && form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
        Save
        </button>
      </form>
    </div>
  );
}

export default Form;
