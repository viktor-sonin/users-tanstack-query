import { IAddress, ICompany, IUser } from "@/types/global";

type UserKeys = keyof Omit<IUser, "name" | "company" | "address">;

export const MAIN: { title: string; field: UserKeys }[] = [
	{ title: "Email", field: "email" },
	{ title: "Телефон", field: "phone" },
	{ title: "Сайт", field: "website" }
];

export const ADDRESS: (keyof IAddress)[] = ["city", "street", "suite", "zipcode"];

export const COMPANY: { title: string; field: keyof ICompany }[] = [
	{ title: "Название", field: "name" },
	{ title: "Слоган", field: "catchPhrase" },
	{ title: "Деятельность", field: "bs" }
];
