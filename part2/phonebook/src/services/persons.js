import axios from "axios";
const baseUrl = "https://jf-phonebook.fly.dev/api/persons" 

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const getPerson = (id) => {
    const request = axios.get(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

const create = (personObject) => {
    const request = axios.post(baseUrl, personObject)
    return request.then(response => response.data)
}

const update = (id, updatedPerson) => {
    const request = axios.put(`${baseUrl}/${id}`, updatedPerson)
    return request.then(response => response.data)
}

const delPerson = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

export default {getAll, getPerson, create, update, delPerson}