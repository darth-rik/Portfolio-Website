import React, { useEffect } from "react";
import "./sass/main.scss";

import Home from "./pages/Home";

function App() {
	useEffect(() => {
		window.history.scrollRestoration = "manual";
		window.addEventListener("load", () => {
			document.querySelector(".loading-screen").style.display = "none";
		});

		return () => {
			window.removeEventListener("load", () => {
				document.querySelector(".loading-screen").style.display = "none";
			});
		};
	}, []);
	return (
		<div>
			<Home />
		</div>
	);
}

export default App;
