import { ReactNode, useCallback, useRef } from "react";
import { Root, createRoot } from "react-dom/client";

export type DialogRendererType = (props: { onClose: () => void }) => ReactNode;

export const useModalContext = () => {
	const modalRootRef = useRef<Root | null>(null);
	const modalContainerRef = useRef<HTMLDivElement | null>(null);

	const open = useCallback((renderDialog: DialogRendererType) => {
		if (modalContainerRef.current) {
			modalRootRef.current?.unmount();
			document.body.removeChild(modalContainerRef.current);
		}

		const modalContainer = document.createElement("div");
		modalContainerRef.current = modalContainer;
		document.body.appendChild(modalContainer);

		const onClose = () => {
			if (modalRootRef.current) {
				modalRootRef.current.unmount();
				modalRootRef.current = null;
			}
			if (modalContainerRef.current) {
				document.body.removeChild(modalContainerRef.current);
				modalContainerRef.current = null;
			}
		};

		const root = createRoot(modalContainer);
		modalRootRef.current = root;
		root.render(renderDialog({ onClose }));
	}, []);

	return { open };
};
