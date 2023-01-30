import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css'
import { GlobalStyles } from "twin.macro";
import ThemeProvider from "./contexts/ThemeContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<>
		<GlobalStyles />
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</>
);
