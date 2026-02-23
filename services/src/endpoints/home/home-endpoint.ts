import client from "@/services/apiClient";


const apiService = {
    fetchUsers : async () => {
        const response = await client.get('/users');
        return response;
    }
}

export default apiService;