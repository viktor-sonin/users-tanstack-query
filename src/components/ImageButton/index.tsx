import { ComponentProps, JSX, ReactNode } from "react";
import cls from "./styles.module.scss";
import { classnames } from "@/utils/classnames";

interface IProps extends ComponentProps<"button"> {
	startIcon?: JSX.Element;
	variant?: "primary" | "secondary";
	children: ReactNode;
}

export const Button = (props: IProps) => {
	const { startIcon, variant = "primary", type = "button", children, ...rest } = props;

	return (
		<button
			className={classnames(cls.button, { [cls.delete]: variant === "secondary" })}
			type={type}
			{...rest}
		>
			{startIcon}
			{children && <span className={cls.text}>{children}</span>}
		</button>
	);
};
