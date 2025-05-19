import { Container } from "@/components/Container";
import cls from "./styles.module.scss";
import { ReactNode } from "react";

interface IProps {
	open: boolean;
	children: ReactNode;
}

export const Modal = ({ open, children }: IProps) => {
	return (
		open && (
			<div className={cls.modal}>
				<Container>{children}</Container>
			</div>
		)
	);
};
