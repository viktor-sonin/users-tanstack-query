import { IUser } from "@/types/global";
import axios from "axios";

const API_DOMAIN = "https://storage.yandexcloud.net/test-web-site/";
const API_URL = API_DOMAIN + "skillsrock/users-tanstack-query/data.json";

export const UserService = {
	async fetchUsers(): Promise<IUser[]> {
		const response = await axios.get(API_URL);
		return response.data;
	},

	async fetchUser(id: string): Promise<IUser> {
		await new Promise((r) => setTimeout(r, 250));

		const response = await axios.get(API_URL);
		const index = response.data.findIndex((u: IUser) => u.id === id);

		if (index !== -1) {
			return { ...response.data[index] };
		} else {
			throw new Error("Пользователь не найден");
		}
	},

	async createUser(user: IUser): Promise<IUser> {
		const getResponse = await axios.get(API_URL);

		if (getResponse.data) {
			await axios.put(API_URL, JSON.stringify([...getResponse.data, user]));
			return user;
		} else {
			throw new Error("Ошибка при создании: " + getResponse.statusText);
		}
	},

	async updateUser(user: IUser): Promise<IUser> {
		const getResponse = await axios.get(API_URL);
		const index = getResponse.data.findIndex((u: IUser) => u.id === user.id);

		if (index !== -1) {
			getResponse.data[index] = user;
			await axios.put(API_URL, JSON.stringify(getResponse.data));
			return user;
		} else {
			throw new Error("Ошибка при обновлении: " + getResponse.statusText);
		}
	},

	async deleteUser(id: string): Promise<string> {
		const response = await axios.get(API_URL);
		const data = response.data.filter((u: IUser) => u.id !== id);

		try {
			await axios.put(API_URL, JSON.stringify(data));
			return id;
		} catch (error) {
			throw new Error("Ошибка при удалении: " + error);
		}
	}
};
