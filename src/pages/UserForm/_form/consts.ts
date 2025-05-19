import { AddressField, CompanyField, MainField } from "./types";

export const MAIN_FIELDS: MainField[] = [
	{
		title: "Имя",
		field: "name",
		placeholder: "name"
	},
	{
		title: "Email",
		field: "email",
		placeholder: "sample@gmail.com"
	},
	{
		title: "Телефон",
		field: "phone",
		placeholder: "+7 999 88 88 88"
	},
	{
		title: "Сайт",
		field: "website",
		placeholder: "website.org"
	}
];

export const ADDRESS_FIELDS: AddressField[] = [
	{
		title: "Город",
		field: "city",
		placeholder: "Wisokyburgh"
	},
	{
		title: "Улица",
		field: "street",
		placeholder: "Victor Plains"
	},
	{
		title: "Апартаменты",
		field: "suite",
		placeholder: "Suite 879"
	},
	{
		title: "Почтовый индекс",
		field: "zipcode",
		placeholder: "90566-7771"
	}
];

export const COMPANY_FIELDS: CompanyField[] = [
	{
		title: "Название",
		field: "name",
		placeholder: "Romaguera-Crona"
	},
	{
		title: "Слоган",
		field: "catchPhrase",
		placeholder: "Proactive didactic contingency"
	},
	{
		title: "Деятельность",
		field: "bs",
		placeholder: "synergize scalable supply-chains"
	}
];
