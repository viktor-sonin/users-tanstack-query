import { useModalContext } from "@/hooks/useModalContext";
import { createContext, useContext } from "react";
import type { ReactNode } from "react";

type ModalContextType = ReturnType<typeof useModalContext>;

interface IModalProviderProps {
	children: ReactNode;
}

const ModalContext = createContext<ModalContextType | null>(null);

export const useModal = (): ModalContextType => {
	const context = useContext(ModalContext);
	if (!context) {
		throw new Error("useModal должен использоваться внутри ModalProvider");
	}
	return context;
};

export const ModalProvider = ({ children }: IModalProviderProps) => {
	const modalState = useModalContext();

	return <ModalContext.Provider value={modalState}>{children}</ModalContext.Provider>;
};
