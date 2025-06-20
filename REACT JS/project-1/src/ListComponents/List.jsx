import React, { useEffect, useState } from "react";
import { GetPageList, DeletePageList } from "../ServiceComponents/Component";
import Form from "./Form";

export default function List() {
  const [contact, setContact] = useState(null);
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
  };

  const handleDel = async (id) => {
    if (window.confirm("are you sure you want to delete")) {
      await DeletePageList(id);
      setContact((contact) => contact.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="container">
      <div className="nar">
        <div>
          <button onClick={AddData}>Add</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>PH NO</th>
              <th>MESSAGE</th>
              <th>STATUS</th>
              <th>EDIT</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {contact &&
              contact.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.full_name}</td>
                  <td>{item.user_email}</td>
                  <td>{item.user_mobile}</td>
                  <td>{item.message}</td>
                  <td>{item.status}</td>
                  <td>
                    <button onClick={() => EditData(item.id)}>EDIT</button>
                  </td>
                  <td>
                    <button onClick={() => handleDel(item.id)}>DELETE</button>
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
