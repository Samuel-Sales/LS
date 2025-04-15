import axios from 'axios';

const api = axios.create({
    // baseURL: 'https://lsapi-nu.vercel.app',
    baseURL: 'http://localhost:3000',
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

const handleError = (error) => {
    console.error('Erro na requisicao:', error.response?.data || error.message);
    throw error;
};

export const getProdutos = async () => {
    try {
        const response = await api.get('/produtos');
        return response.data;
    }catch (error) {
        handleError(error);
    }
};

export default api;