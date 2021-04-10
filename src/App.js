import React, { useEffect } from "react";
import "./sass/main.scss";

import Home from "./pages/Home";

function App() {
	useEffect(() => {
		window.history.scrollRestoration = "manual";
	}, []);
	return (
		<div>
			<Home />
		</div>
	);
}

export default App;
