import { Link, LinkProps } from "react-router-dom";
import { Button } from "@/components/ImageButton";
import { JSX } from "react";

interface IProps extends LinkProps {
	startIcon?: JSX.Element;
}

export const LinkButton = ({ startIcon, to, className, children, ...rest }: IProps) => {
	return (
		<Link to={to} className={className} tabIndex={-1} {...rest}>
			<Button startIcon={startIcon}>{children}</Button>
		</Link>
	);
};
