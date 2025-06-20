import axios from "axios";

export async function GetPageList() {
    try{
        let response = await axios.get('http://192.168.1.114:3005/')
        return response.data.user
    }catch(error){
        return error;
    }
}

export async function EditPageList(id) {
    try{
        let response = await axios.get(`http://192.168.1.114:3005/${id}`)
        return response.data.user
    }catch(error){
        return error;
    }
}

export async function PutPageList(id) {
    try {
        let response = await axios.put(`http://192.168.1.114:3005/${id}`)
        return response.data.user
    } catch (error) {
        return error;
    }
}

export async function PostPageList(id) {
    try {
        let response = await axios.post(`http://192.168.1.114:3005/${id}`)
        return response.data.user
    } catch (error) {
        return error;
    }
}

export async function DeletePageList(id) {
    try {
        let response = await axios.delete(`http://192.168.1.114:3005/${id}`)
        return response.data.user
    } catch (error) {
        return error;
    }
}
