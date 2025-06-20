import React, { useEffect, useState } from "react";
import {
  EditPageList,
  PostPageList,
  PutPageList,
} from "../ServerComponent/ServiceComp";

function Form({ mode, id, userHandler }) {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    ph_no: "",
    description: "",
    country_name: "",
  });

  useEffect(() => {
    if (mode === "edit" && id) {
      EditPageList(id)
      .then((laptop) => {
        if (laptop)
        setForm(laptop);
      });
    } else {
      setForm({
        fullname: "",
        email: "",
        ph_no: "",
        description: "",
        country_name: "",
      });
    }  
  }, [mode, id]);
console.log(id)

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (mode === "edit") {
      await PutPageList(form);
    } else {
      await PostPageList(form);
    }
    userHandler();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 style={{ textAlign: "center" }}>
        {mode === "add" ? "Add" : "Edit"} DATA
      </h2>

      <div className="mb-3">
        <label>Full Name</label>
        <input
          type="text"
          className="form-control"
          value={form.fullname}
          onChange={(e) => setForm({ ...form, fullname: e.target.value })}
          required
        />
      </div>

      <div className="mb-3">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
      </div>

      <div className="mb-3">
        <label>Phone Number</label>
        <input
          type="number"
          className="form-control"
          value={form.ph_no}
          onChange={(e) => setForm({ ...form, ph_no: e.target.value })}
          required
        />
      </div>

      <div className="mb-3">
        <label>Description</label>
        <textarea
          className="form-control"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          required
        />
      </div>

      <div className="mb-3">
        <label>Country</label>
        <input
          type="text"
          className="form-control"
          value={form.country_name}
          onChange={(e) => setForm({ ...form, country_name: e.target.value })}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">
        {mode === "edit" ? "update" : "Save"}
      </button>

    </form>
  );
}

export default Form;