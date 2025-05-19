import { ADDRESS_FIELDS, COMPANY_FIELDS, MAIN_FIELDS } from "./consts";
import { Button } from "@/components/ImageButton";
import { LinkButton } from "@/components/LinkButton";
import { Spoiler } from "@/components/Spoiler";
import { RoutesEnum } from "@/AppRouter";
import { IUser } from "@/types/global";
import cls from "./styles.module.scss";
import { useState } from "react";
import { IProps } from "./types";

export const Form = ({ user, handleSubmit }: IProps) => {
	const [formData, setFormData] = useState<IUser>({
		id: user?.id || String(Date.now()),
		name: user?.name || "",
		email: user?.email || "",
		phone: user?.phone || "",
		website: user?.website || "",
		company: {
			name: user?.company.name || "",
			catchPhrase: user?.company.catchPhrase || "",
			bs: user?.company.bs || ""
		},
		address: {
			street: user?.address.street || "",
			suite: user?.address.suite || "",
			city: user?.address.city || "",
			zipcode: user?.address.zipcode || ""
		}
	});

	return (
		<form onSubmit={(e) => handleSubmit(e, formData)} className={cls.root}>
			{MAIN_FIELDS.map((item) => (
				<div key={item.field} className={cls.field}>
					{item.title}
					<input
						key={item.field}
						id={item.field}
						type={item.field === "email" ? "email" : "text"}
						value={formData[item.field]}
						onChange={(e) => setFormData({ ...formData, [item.field]: e.target.value })}
						placeholder={item.placeholder}
						required={item.field === "name" || item.field === "email"}
					/>
				</div>
			))}
			<Spoiler
				title={
					<h2 className={cls.title}>
						Адрес
						<hr />
					</h2>
				}
				body={
					<>
						{ADDRESS_FIELDS.map((item) => (
							<div key={item.field} className={cls.field}>
								{item.title}
								<input
									key={item.field}
									id={item.field}
									type="text"
									value={formData.address[item.field]}
									onChange={(e) => {
										const data = { ...formData };
										data.address[item.field] = e.target.value;
										setFormData(data);
									}}
									placeholder={item.placeholder}
								/>
							</div>
						))}
					</>
				}
			/>
			<Spoiler
				title={
					<h2 className={cls.title}>
						Компания
						<hr />
					</h2>
				}
				body={
					<>
						{COMPANY_FIELDS.map((item) => (
							<div key={item.field} className={cls.field}>
								{item.title}
								<input
									key={item.field}
									id={item.field}
									type="text"
									value={formData.company[item.field]}
									onChange={(e) => {
										const data = { ...formData };
										data.company[item.field] = e.target.value;
										setFormData(data);
									}}
									placeholder={item.placeholder}
								/>
							</div>
						))}
					</>
				}
			/>
			<div className={cls.buttons}>
				<LinkButton to={RoutesEnum.USERS + (user ? user.id : "")}>Отмена</LinkButton>
				<Button type="submit" variant="secondary">
					{user ? "Обновить" : "Добавить"}
				</Button>
			</div>
		</form>
	);
};
