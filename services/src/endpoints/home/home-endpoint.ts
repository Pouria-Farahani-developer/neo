import client from "@/services/apiClient";


const apiService = {
    fetchUsers : async () => {
        const response = await client.get('/users');
        return response;
    },
    createUser: async (newUser:any) => {
        const response = await client.post('/users', newUser);
        return response.data;
    },
}

export default apiService;