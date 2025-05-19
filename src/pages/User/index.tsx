import { SVG_Back, SVG_Edit, SVG_Trash } from "@/assets/svg";
import { useNavigate, useParams } from "react-router-dom";
import { QueryWrapper } from "@/components/QueryWrapper";
import { useUsersQuery } from "@/hooks/useUsersQuery";
import { LinkButton } from "@/components/LinkButton";
import { Container } from "@/components/Container";
import { Button } from "@/components/ImageButton";
import { UserDeleteModal } from "./_deleteModal";
import { useModal } from "@/app/modalContext";
import { RoutesEnum } from "@/AppRouter";
import { COMPANY, MAIN } from "./consts";
import { ListInfo } from "./_listInfo";
import { UserInfo } from "./_userInfo";
import cls from "./styles.module.scss";

export const User = () => {
	const modal = useModal();
	const { id } = useParams();
	const navigate = useNavigate();
	const { useUser, deleteMutation } = useUsersQuery();
	const { data: user, isLoading, isError, error } = useUser(id);

	const handleDelete = () => {
		modal.open(({ onClose }) => (
			<UserDeleteModal
				open
				onClose={onClose}
				onSubmit={() => {
					deleteMutation.mutate(user?.id ?? "", {
						onSuccess: () => {
							onClose();
							navigate(RoutesEnum.USERS);
						}
					});
				}}
			/>
		));
	};

	return (
		<QueryWrapper isError={isError} error={error}>
			<section className={cls.root}>
				<Container className={cls.content} isLoading={isLoading}>
					{isLoading ? (
						<>
							<h1>User Name</h1>
							<hr />
							<ListInfo
								title="Контактная информация"
								elements={MAIN.map((item) => (
									<p key={item.field}>{item.title}:</p>
								))}
							/>
							<ListInfo
								title="Компания"
								elements={COMPANY.map((item) => (
									<p key={item.field}>{item.title}:</p>
								))}
							/>
							<ListInfo title="Адрес" />
						</>
					) : (
						<UserInfo user={user} />
					)}

					<div className={cls.buttons}>
						<Button onClick={handleDelete} variant="secondary" startIcon={<SVG_Trash />}>
							Удалить
						</Button>
						<LinkButton to={`${RoutesEnum.USERS + id}/edit`} startIcon={<SVG_Edit />}>
							Изменить
						</LinkButton>
					</div>
				</Container>
				<LinkButton to={RoutesEnum.USERS} startIcon={<SVG_Back />}>
					Назад к списку
				</LinkButton>
			</section>
		</QueryWrapper>
	);
};
