import axios from 'axios';

const baseURL = 'http://localhost:3000/teacherdetails';

export async function GetPageList() {
    try {
        const response = await axios.get(baseURL);
        return response.data;
    } catch (error) {
        console.error(error);
        return error;
    }
}

export async function EditPageList(id) {
    try {
        const response = await axios.get(`${baseURL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return error;
    }
}

export async function PutPageList(form) {
    try {
        const response = await axios.put(`${baseURL}/${form.id}`, form);
        return response;
    } catch (error) {
        console.error(error);
        return error;
    }
}

export async function PostgPageList(form) {
    try {
        const response = await axios.post(baseURL, form);
        return response;
    } catch (error) {
        console.error(error);
        return error;
    }
}

export async function DeletePageList(id) {
    try {
        const response = await axios.delete(`${baseURL}/${id}`);
        return response;
    } catch (error) {
        console.error(error);
        return error;
    }
}
