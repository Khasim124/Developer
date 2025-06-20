import React, { useEffect, useState } from "react";
import { GetPageList, DeletePageList } from "../Server/ServiceComp";
import Form from "../Components/TeachForm";

export default function TeachList() {
  const [content, setContent] = useState([]);
  const [mode, setMode] = useState("");
  const [id, setId] = useState();

  async function Fetchdata() {
    let data = await GetPageList();
    setContent(data);
  }

  useEffect(() => {
    Fetchdata();
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
    if (window.confirm("Are you sure you want to delete?")) {
      await DeletePageList(id);
      setContent((prev) => prev.filter((item) => item.id !== id));
    }
  };

  return (
    <div>
      <div>
        <h1 className="none">Teachers List</h1>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button onClick={addData} className="btn btn-success mb-3">
            Add
          </button>
        </div>
        <table className="table table-success table-striped mt-3">
          <thead>
            <tr>
              <th>Id</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Gender</th>
              <th>Department</th>
              <th>Joining Date</th>
              <th>Status</th>
              <th>Salary</th>
              <th>Address</th>
              <th>Teacher_Id</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {content &&
              content.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.teacher_name}</td>
                  <td>{item.teacher_email}</td>
                  <td>{item.teacher_phno}</td>
                  <td>{item.teacher_gender}</td>
                  <td>{item.teacher_department}</td>
                  <td>{item.teacher_joiningdate}</td>
                  <td>{item.teacher_status}</td>
                  <td>{item.teacher_salary}</td>
                  <td>{item.teacher_address}</td>
                  <td>{item.teacher_id}</td>
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

        <Form mode={mode} id={id} Fetchdata={Fetchdata} />
      </div>
    </div>
  );
}
