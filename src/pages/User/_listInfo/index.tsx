import cls from "./styles.module.scss";
import { ReactNode } from "react";

interface IProps<T> {
	title: string;
	elements?: T;
}

export const ListInfo = <T extends ReactNode>({ title, elements }: IProps<T>) => {
	return (
		<div className={cls.infoRoot}>
			<h3 className={cls.subtitle}>{title}</h3>
			{elements}
			<hr />
		</div>
	);
};
