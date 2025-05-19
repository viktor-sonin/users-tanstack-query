import { IAddress, ICompany, IUser } from "@/types/global";

export interface IProps {
	user?: IUser | null;
	handleSubmit: (event: React.FormEvent, formData: IUser) => void;
}

export interface MainField {
	title: string;
	field: keyof Omit<IUser, "company" | "address">;
	placeholder: string;
}

export interface AddressField extends Omit<MainField, "field"> {
	field: keyof IAddress;
}

export interface CompanyField extends Omit<MainField, "field"> {
	field: keyof ICompany;
}
