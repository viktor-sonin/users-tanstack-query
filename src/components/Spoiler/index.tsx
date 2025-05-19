import { ReactNode, useState } from "react";
import cls from "./styles.module.scss";
import { SVG_ArrowDown } from "@/assets/svg";
import { classnames } from "@/utils/classnames";

interface IProps {
	defaultState?: boolean;
	title: ReactNode;
	body: ReactNode;
}

export const Spoiler = ({ defaultState: isDefaultOpen = false, title, body }: IProps) => {
	const [isOpen, setIsOpen] = useState(isDefaultOpen);

	return (
		<div className={cls.spoiler}>
			<label className={cls.button} onClick={() => setIsOpen((prev) => !prev)}>
				<div className={cls.title}>{title}</div>
				<SVG_ArrowDown className={classnames(cls.image, { [cls.open]: isOpen })} />
			</label>
			{isOpen && body}
		</div>
	);
};
