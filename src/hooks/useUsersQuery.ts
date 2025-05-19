import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { UserService } from "@/services/userService";
import { IUser } from "@/types/global";

export const useUsersQuery = () => {
	const queryClient = useQueryClient();

	const useUsers = () => {
		return useQuery({ queryKey: ["users"], queryFn: UserService.fetchUsers });
	};

	const useUser = (id?: string) => {
		return useQuery({
			queryKey: ["user", id],
			queryFn: () => (id ? UserService.fetchUser(id) : null)
		});
	};

	const createMutation = useMutation({
		mutationFn: UserService.createUser,
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] })
	});

	const updateMutation = useMutation({
		mutationFn: UserService.updateUser,
		onSuccess: (user: IUser) => {
			queryClient.invalidateQueries({ queryKey: ["users"] });
			queryClient.invalidateQueries({ queryKey: ["user", user.id] });
		}
	});

	const deleteMutation = useMutation({
		mutationFn: UserService.deleteUser,
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] })
	});

	return {
		useUser,
		useUsers,
		createMutation,
		updateMutation,
		deleteMutation
	};
};
