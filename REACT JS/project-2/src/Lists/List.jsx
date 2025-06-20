import React, { useEffect, useState } from "react";
import { GetPageList, DeletePageList } from "../ServerComponent/ServiceComp";
import Form from "../Forms/Form";

export default function List() {
  const [content, setContent] = useState();
  const [mode, setMode] = useState("");
  const [id, setId] = useState();

  const userHandler = async () => {
    const data = await GetPageList();
    setContent(data)
  };

  useEffect(() => {
    userHandler();
  }, []);
  

  const editData = (id) => {
    setMode("edit");
    setId(id);
  };

  const addData = () => {
    setMode("add");
    setId(null);
  };

  const delHandler = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      await DeletePageList(id);
      setContent((prevData) => prevData.filter((item) => item.id !== id));
    }
  };

  return (
    <div>
      <div>
        <h1 className="none">Enquiry Form</h1>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button onClick={addData} className="btn btn-success mb-3">
            Add
          </button>
        </div>
        <table className="table table-success table-striped mt-3">
          <thead>
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Description</th>
              <th>Country</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {content &&
              content.map((item) => (
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
                      onClick={() => delHandler(item.id)}
                      className="btn btn-sm btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        <Form mode={mode} id={id} userHandler={userHandler} />
      </div>
    </div>
  );
}
