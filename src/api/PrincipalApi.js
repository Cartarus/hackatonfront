import axios from "axios";


export const principalApi = axios.create({
    baseURL: 'https://docusenseai-api.gse.com.co/',
    headers: {
        'Content-Type': 'application/json', // Set appropriate content type
        // 'Authorization': 'Bearer <your-token>', // If needed
    },
});

export const authApi = axios.create({
    baseURL:'http://localhost:3001/users/'
});