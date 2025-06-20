import axios from "axios";

export async function GetPageList() {
  try {
    const response = await axios.get('http://192.168.1.106:3005/');
    return response.data.user;
  } catch (error) {
    return error
  }
}

export async function EditPageList(id) {
  try {
    const response = await axios.get(`http://192.168.1.106:3005/${id}`);
    return response.data.user;
  } catch (error) {
    return error
  }
}

export async function DeletePageList(id) {
  try {
    const response = await axios.delete(`http://192.168.1.106:3005/${id}`);
    return response;
  } catch (error) {
    return error;
  }
}

export async function PutPageList(form) {
  try {
    const response = await axios.put(`http://192.168.1.106:3005/${form.id}`, form);
    return response;
  } catch (error) {
    return error;
  }
}

export async function PostPageList(form) {
  try {
    const response = await axios.post(`http://192.168.1.106:3005/`, form);
    return response;
  } catch (error) {
    return error;
  }
}
