import axios from 'axios'

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api/v1',
    timeout: 10000
});
apiClient.interceptors.request.use(
    async (config) => {
        const jwtToken = localStorage.getItem("jwtToken");
        if(jwtToken){
            config.headers.Authorization = `Bearer ${jwtToken}`
        }
        return config;
    },
    (error) => Promise.reject(error)
)

export default apiClient
