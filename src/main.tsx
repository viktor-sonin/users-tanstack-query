import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ModalProvider } from "@/app/modalContext";
import { createRoot } from "react-dom/client";
import { AppRouter } from "@/AppRouter";
import { StrictMode } from "react";
import "./main.scss";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 5 // 5 минут
		}
	}
});

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<ModalProvider>
				<AppRouter />
			</ModalProvider>
		</QueryClientProvider>
	</StrictMode>
);
