import { Button } from "@/components/ImageButton";
import { Modal } from "@/components/Modal";
import cls from "./styles.module.scss";

interface IProps {
	open: boolean;
	onClose?: () => void;
	onSubmit?: () => void;
}

export const UserDeleteModal = ({ open, onClose, onSubmit }: IProps) => {
	return (
		<Modal open={open}>
			<div className={cls.root}>
				<h3>Вы уверены, что хотите удалить этого пользователя?</h3>
				<div className={cls.buttons}>
					<Button onClick={onClose}>Отмена</Button>
					<Button onClick={onSubmit} variant="secondary">
						Удалить
					</Button>
				</div>
			</div>
		</Modal>
	);
};
