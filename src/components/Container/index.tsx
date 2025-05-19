import { classnames } from "@/utils/classnames";
import { SVG_Loading } from "@/assets/svg";
import cls from "./styles.module.scss";
import { ReactNode } from "react";

interface IProps {
	isLoading?: boolean;
	className?: string;
	children: ReactNode;
}

export const Container = ({ isLoading = false, className = "", children }: IProps) => {
	return (
		<div className={classnames(cls.container, className, { [cls.isLoading]: isLoading })}>
			{children}
			<div className={cls.loadingRoot}>
				<SVG_Loading className={cls.loadingCircle} />
			</div>
		</div>
	);
};
