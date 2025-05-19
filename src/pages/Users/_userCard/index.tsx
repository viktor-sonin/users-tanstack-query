import { Container } from "@/components/Container";
import { RoutesEnum } from "@/AppRouter";
import { Link } from "react-router-dom";
import { IUser } from "@/types/global";
import cls from "./styles.module.scss";

interface IProps {
	user: IUser;
}

export const UserCard = ({ user }: IProps) => {
	return (
		<Container className={cls.userCard}>
			<Link to={RoutesEnum.USERS + user.id} className={cls.link}>
				<h2>
					{user.name}
					<hr />
				</h2>
				{user.email && <p>Email: {user.email}</p>}
				{user.company.name && <p>Компания: {user.company.name}</p>}
			</Link>
		</Container>
	);
};
