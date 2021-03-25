import React, { useEffect, useRef, useState } from "react";
import Navigation from "../Navigation";
import Sidebar from "../Sidebar";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const sidebar = useRef();
	const backdrop = useRef();
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflowY = "hidden";
			sidebar.current.classList.add("sidebar-open");
			backdrop.current.classList.add("backdrop");
		} else {
			document.body.style.overflowY = "";
			sidebar.current.classList.remove("sidebar-open");
			backdrop.current.classList.remove("backdrop");
		}
	}, [isOpen]);

	useEffect(() => {
		document.body.addEventListener("click", (e) => {
			if (
				backdrop.current.contains(e.target) &&
				!sidebar.current.contains(e.target)
			)
				setIsOpen(false);
		});
		const backdropRef = backdrop.current;
		const sidebarRef = sidebar.current;
		return () => {
			document.body.removeEventListener("click", (e) => {
				if (backdropRef.contains(e.target) && !sidebarRef.contains(e.target))
					setIsOpen(false);
			});
		};
	}, []);

	return (
		<header className='header'>
			<div ref={backdrop}>
				<Sidebar sidebar={sidebar} />
			</div>

			<Navigation open={() => (!isOpen ? setIsOpen(true) : setIsOpen(false))} />

			<div className='header-details'></div>
		</header>
	);
};

export default Header;
