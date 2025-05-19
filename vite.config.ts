import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
	base: "/skillsrock/users-tanstack-query/",
	build: { outDir: "build/users-tanstack-query" },
	plugins: [react()],
	resolve: {
		alias: {
			"@": "/src"
		}
	}
});
