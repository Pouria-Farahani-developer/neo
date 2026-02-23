import {useQuery} from "@tanstack/react-query";
import apiService from "@/services/src/endpoints/home/home-endpoint";

export const useUsersList = () => {
    const queryResult = useQuery({
        queryKey: ['usersList'],
        queryFn: apiService.fetchUsers,
        staleTime: 1000 * 60 * 10, // مثلاً 10 دقیقه
    });

    return queryResult;
};