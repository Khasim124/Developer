import axios from 'axios'

export async function GetPageList() {
    try {
        let response = await axios.get('http://18.130.219.171:3200/cont')
        return response.data.data.items
    }
    catch (error) {
        return error;
    }
}

export async function EditPageList(id) {
    try {
        let response = await axios.get("http://18.130.219.171:3200/cont/" + id)
        return response.data.data
    }
    catch (error) {
        return error;
    }
}

export async function PutPageList(form) {
    try {
        let response = await axios.put('http://18.130.219.171:3200/cont/' + form.id, form)
        return response;
    } catch (error) {
        return error;
    }
}

export async function PostgPageList(form) {
    try {
        let response = await axios.post('http://18.130.219.171:3200/cont', form)
        return response;
    } catch (error) {
        return error;
    }
}

export async function DeletePageList(id) {
    try {
        let response = await axios.delete('http://18.130.219.171:3200/cont/' + id)
        return response;
    } catch (error) {
        return error;
    }
}

