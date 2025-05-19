import { QueryWrapper } from "@/components/QueryWrapper";
import { useUsersQuery } from "@/hooks/useUsersQuery";
import { LinkButton } from "@/components/LinkButton";
import { RoutesEnum } from "@/AppRouter";
import { UserCard } from "./_userCard";
import cls from "./styles.module.scss";

export const Users = () => {
	const { useUsers } = useUsersQuery();
	const { data, isLoading, isError, error } = useUsers();

	return (
		<QueryWrapper isLoading={isLoading} isError={isError} error={error}>
			<section className={cls.root}>
				<h1 className={cls.title}>Список пользователей</h1>
				<LinkButton to={RoutesEnum.USERS_NEW} className={cls.button}>
					Добавить пользователя
				</LinkButton>
				<div className={cls.cards}>
					{data?.map((user) => (
						<UserCard key={user.id} user={user} />
					))}
				</div>
			</section>
		</QueryWrapper>
	);
};
