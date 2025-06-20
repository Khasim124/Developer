import React, { useEffect, useState } from "react";
import { GetPageList, DeletePageList } from "../Server/Service";
import ProdForm from "./ProdForm";

export default function ProdList() {
  const [contact, setContact] = useState([]);
  const [mode, setMode] = useState(null);
  const [id, setId] = useState(null);

  async function Fetchdata() {
    let data = await GetPageList();
    setContact(data);
  }

  useEffect(() => {
    Fetchdata();
  }, []);

  const EditData = (id) => {
    setMode("edit");
    setId(id);
  };

  const AddData = () => {
    setMode("add");
    setId(null);
  };

  const handleDel = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await DeletePageList(id);
      setContact((prev) => prev.filter((item) => item.Id !== id));
    }
  };

  return (
    <div className="container my-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="mb-0">Product List</h3>
        <button className="btn btn-primary btn-sm" onClick={AddData}>
          <i className="bi bi-plus-circle me-1"></i> Add Product
        </button>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover align-middle text-center">
          <thead className="table-light">
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>SKU</th>
              <th>Category</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Date</th>
              <th>Stock</th>
              <th>Customer</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {contact.map((item) => (
              <tr key={item.Id}>
                <td>{item.Id}</td>
                <td>{item.Prod_name}</td>
                <td>{item.SKU_Code}</td>
                <td>{item.Category}</td>
                <td>{item.Price}</td>
                <td>{item.Quantity}</td>
                <td style={{width:"100px"}}>{item.Date_Added}</td>
                <td>{item.In_stock ? "Yes" : "No"}</td>
                <td>{item.Customer_name}</td>
                <td>{item.Customer_phno}</td>
                <td>{item.Customer_email}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => EditData(item.Id)}
                  >
                    EDit
                    <i className="bi bi-pencil-square"></i>
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDel(item.Id)}
                  >
                    DELETE
                    <i className="bi bi-trash3-fill"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {mode && (
        <div className="mt-4">
          <div className="card shadow-sm">
            <div className="card-header bg-light fw-bold">
              {mode === "edit" ? "Edit Product" : "Add New Product"}
            </div>
            <div className="card-body">
              <ProdForm
                mode={mode}
                id={id}
                Fetchdata={() => {
                  Fetchdata();
                  setMode(null);
                  setId(null);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
