import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
	base: "/users-tanstack-query/",
	build: { outDir: "build" },
	plugins: [react()],
	resolve: {
		alias: {
			"@": "/src"
		}
	}
});
