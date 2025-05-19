import { ADDRESS, COMPANY, MAIN } from "../consts";
import { Fragment } from "react/jsx-runtime";
import { UserType } from "@/types/global";
import { ListInfo } from "../_listInfo";

export const UserInfo = ({ user }: { user?: UserType }) => {
	return (
		user && (
			<>
				<h1>{user.name}</h1>
				<hr />
				<ListInfo
					title="Контактная информация"
					elements={MAIN.map((item) => (
						<Fragment key={item.field}>
							{user[item.field] && (
								<p>
									{item.title}: {user[item.field]}
								</p>
							)}
						</Fragment>
					))}
				/>
				{user.company?.name && (
					<ListInfo
						title="Компания"
						elements={COMPANY.map((item) => (
							<Fragment key={item.field}>
								{user.company[item.field] && (
									<p>
										{item.title}: {user.company[item.field]}
									</p>
								)}
							</Fragment>
						))}
					/>
				)}
				{user.address?.city && (
					<ListInfo
						title="Адрес"
						elements={ADDRESS.map((item) => (
							<Fragment key={item}>
								{user.address[item] && (
									<p>
										{item}: {user.address[item]}
									</p>
								)}
							</Fragment>
						))}
					/>
				)}
			</>
		)
	);
};
