import { Routes, Route, HashRouter } from "react-router-dom";
import { UserForm } from "@/pages/UserForm";
import { Users } from "@/pages/Users";
import { User } from "@/pages/User";

export const RoutesEnum = {
	USERS: "/users/",
	USERS_NEW: "/users/new"
};
export type RoutesEnumType = (typeof RoutesEnum)[keyof typeof RoutesEnum];

export const AppRouter = () => {
	return (
		<HashRouter>
			<Routes>
				<Route path={RoutesEnum.USERS} element={<Users />} />
				<Route path={RoutesEnum.USERS_NEW} element={<UserForm />} />
				<Route path={RoutesEnum.USERS + ":id"} element={<User />} />
				<Route path={RoutesEnum.USERS + ":id/edit"} element={<UserForm />} />
				<Route path="*" element={<Users />} />
			</Routes>
		</HashRouter>
	);
};
