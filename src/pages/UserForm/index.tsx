import { useNavigate, useParams } from "react-router-dom";
import { QueryWrapper } from "@/components/QueryWrapper";
import { useUsersQuery } from "@/hooks/useUsersQuery";
import { Container } from "@/components/Container";
import { RoutesEnum } from "@/AppRouter";
import { IUser } from "@/types/global";
import cls from "./styles.module.scss";
import { Form } from "./_form";

export const UserForm = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const { useUser, createMutation, updateMutation } = useUsersQuery();
	const { data: user, isLoading, isError, error } = useUser(id);

	const handleSubmit = (event: React.FormEvent, formData: IUser) => {
		event.preventDefault();

		if (user) {
			updateMutation.mutate(formData, {
				onSuccess: () => {
					navigate(RoutesEnum.USERS + user.id);
				}
			});
		} else {
			createMutation.mutate(formData, {
				onSuccess: () => navigate(RoutesEnum.USERS + (formData ? formData.id : ""))
			});
		}
	};

	return (
		<QueryWrapper
			isLoading={isLoading}
			isError={isError || createMutation.isError || updateMutation.isError}
			error={isError ? error : createMutation.isError ? createMutation.error : updateMutation.error}
		>
			<div className={cls.root}>
				<Container
					className={cls.content}
					isLoading={createMutation.isPending || updateMutation.isPending}
				>
					<h1 className={cls.title}>
						{user ? "Редактирование пользователя" : "Добавление пользователя"}
						<hr />
					</h1>
					<Form user={user} handleSubmit={handleSubmit} />
				</Container>
			</div>
		</QueryWrapper>
	);
};
