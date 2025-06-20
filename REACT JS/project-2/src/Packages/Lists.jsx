import { useEffect, useState } from "react";
import Forms from "./Forms";
import { GetPageList,DeletePageList } from "../servicse/Service";

export default function Lists() {
  const [contact, setContact] = useState([]);
  const [mode,setMode] = useState(null)
  const [id,setId] = useState(null)

  const fetchData = async () => {
    let data = await GetPageList();
    setContact(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addData = () =>{
    setMode("add")
    setId("null")
  }

  const editData = (id) =>{
    setMode("edit")
    setId("id")
  }

  const delPage = async(id) =>{
    if(window.confirm('Are you sure you want to delete the item?')){
        await DeletePageList(id)
    }
  }

  return (
    <div>
      <div className="none">
        <h1>Enquiry Form</h1>
      </div>
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
            <th>PH_NO</th>
            <th>Description</th>
            <th>Country_Name</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {contact &&
            contact.map((item) => (
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
                    onClick={() => delPage(item.id)}
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <Forms mode={mode} id={id} fetchData={fetchData} />
    </div>
  );
}
