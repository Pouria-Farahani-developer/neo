import {useMutation} from "@tanstack/react-query";
import apiService from "@/services/src/endpoints/home/home-endpoint";

export const useUserMutations = () => {

    const mutationResult = useMutation({
        mutationFn: apiService.createUser,
    });

    return mutationResult;
};
