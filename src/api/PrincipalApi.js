import axios from "axios";


export const principalApi = axios.create({
    baseURL: 'https://docusenseai-api.gse.com.co/',
    headers: {
        'Content-Type': 'application/json',
        'api-key':'xCLHuwo2GxZdHwSaC1DN5OcULRLRZVxPxx4m' // Set appropriate content type
        // 'Authorization': 'Bearer <your-token>', // If needed
    },
});

export const authApi = axios.create({
    // baseURL:'https://docusenseai-api.gse.com.co/login'
    baseURL:'http://localhost:3001/users/'
});