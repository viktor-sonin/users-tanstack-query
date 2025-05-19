import { LinkButton } from "@/components/LinkButton";
import { RoutesEnum } from "@/AppRouter";
import cls from "./styles.module.scss";
import { ReactNode } from "react";

interface IProps {
	isLoading?: boolean;
	isError: boolean;
	error?: Error | null;
	children: ReactNode;
}

export const QueryWrapper = ({ isLoading, isError, error, children }: IProps) => {
	if (isLoading || isError) {
		return (
			<h1 className={cls.message}>
				{isLoading ? (
					"Загрузка..."
				) : (
					<>
						{error?.message.includes("404") ? "Пользователь с таким ID не найден" : error?.message}
						<LinkButton
							to={RoutesEnum.USERS}
							startIcon={
								<svg xmlns="http://www.w3.org/2000/svg" height="2.4rem" viewBox="0 -960 960 960">
									<path d="M360-240 120-480l240-240 56 56-144 144h568v80H272l144 144-56 56Z" />
								</svg>
							}
						>
							Назад к списку
						</LinkButton>
					</>
				)}
			</h1>
		);
	}
	return <div className={cls.queryWrapper}>{children}</div>;
};
