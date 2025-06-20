import React, { useEffect, useState } from "react";
import { EditPageList, PutPageList, PostgPageList } from "../Server/Service";

function ProdForm({ mode, id, Fetchdata }) {
  const [form, setForm] = useState(null);

  const categories = ["Electronics", "Clothing", "Books", "Furniture", "Food"];

  const Edit = async (id) => {
    const data = await EditPageList(id);
    setForm({ ...data, id });
  };

  useEffect(() => {
    if (mode === "edit") {
      Edit(id);
    } else {
      setForm({
        Prod_name: "",
        SKU_Code: "",
        Category: "",
        Price: "",
        Quantity: "",
        Date_Added: "",
        In_stock: "",
        Customer_name: "",
        Customer_phno: "",
        Customer_email: "",
      });
    }
  }, [id, mode]);

  const handlesub = async (e) => {
    e.preventDefault();
    if (mode === "edit") {
      await PutPageList(form);
    } else {
      await PostgPageList(form);
    }
    Fetchdata();
    setForm(null);
  };

  if (!form) return null;

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="text-center mb-4">
                {mode === "add" ? "Add" : "Edit"} Product
              </h3>
              <form onSubmit={handlesub}>
                <div className="mb-3">
                  <label className="form-label">Product Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={form.Prod_name}
                    onChange={(e) =>
                      setForm({ ...form, Prod_name: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">SKU Code</label>
                  <input
                    type="text"
                    className="form-control"
                    value={form.SKU_Code}
                    onChange={(e) =>
                      setForm({ ...form, SKU_Code: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Category</label>
                  <select
                    className="form-select"
                    value={form.Category}
                    onChange={(e) =>
                      setForm({ ...form, Category: e.target.value })
                    }
                    required
                  >
                    <option value="">Select Category</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Price</label>
                    <input
                      type="number"
                      className="form-control"
                      value={form.Price}
                      onChange={(e) =>
                        setForm({ ...form, Price: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Quantity</label>
                    <input
                      type="number"
                      className="form-control"
                      value={form.Quantity}
                      onChange={(e) =>
                        setForm({ ...form, Quantity: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Date Added</label>
                  <input
                    type="date"
                    className="form-control"
                    value={form.Date_Added}
                    onChange={(e) =>
                      setForm({ ...form, Date_Added: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="form-check mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="In_stock"
                    checked={form.In_stock}
                    onChange={(e) =>
                      setForm({ ...form, In_stock: e.target.checked })
                    }
                  />
                  <label className="form-check-label" htmlFor="In_stock">
                    In Stock
                  </label>
                </div>

                <div className="mb-3">
                  <label className="form-label">Customer Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={form.Customer_name}
                    onChange={(e) =>
                      setForm({ ...form, Customer_name: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="number"
                      className="form-control"
                      value={form.Customer_phno}
                      onChange={(e) =>
                        setForm({ ...form, Customer_phno: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      value={form.Customer_email}
                      onChange={(e) =>
                        setForm({ ...form, Customer_email: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  {mode === "edit" ? "Update Product" : "Add Product"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProdForm;
