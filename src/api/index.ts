import axios from 'axios';

const axiosInstance = axios.create({
    headers: {
        'Access-Control-Allow-Origin' : '*'
    }
});

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return error;
    }
);

export { axiosInstance };