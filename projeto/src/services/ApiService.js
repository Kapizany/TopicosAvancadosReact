import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3002/api/react-produtos'
});

export const ApiService = {
    async get(endpoint){
        const response = await api.get(`${endpoint}`);
        return response.data;
    },
    async post(endpoint, data){
        const response = api.post(`${endpoint}`, data);
        return response.data;
    },
    async delete(endpoint, id){
        const response = api.delete(`${endpoint}`, {params: {id}});
        return response.data;
    }
}