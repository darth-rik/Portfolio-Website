import React, { useEffect, useRef, useState } from "react";
import Navigation from "../Navigation";
import Sidebar from "../Sidebar";
import Avatar from "../../images/avatar.jpg";

import { MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const sidebar = useRef();
	const backdrop = useRef();
	const header = useRef();
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

	useEffect(() => {
		const Parallax = () => {
			let positionY = window.pageYOffset / 2;
			header.current.style.backgroundPosition = "0 -" + positionY + "px";
		};

		window.addEventListener("scroll", Parallax);

		return () => {
			window.removeEventListener("scroll", Parallax);
		};
	}, [header]);

	return (
		<header ref={header} className='header'>
			<div ref={backdrop}>
				<Sidebar sidebar={sidebar} />
			</div>

			<Navigation open={() => (!isOpen ? setIsOpen(true) : setIsOpen(false))} />

			<div className='header-details'>
				<img
					className='header-details__avatar u-margin-bottom-small'
					src={Avatar}
					alt=''
				/>
				<h1 className='header-details__heading--primary'>
					Hi, I'm Debanjit Sengupta
				</h1>
				<h2 className='header-details__heading--secondary'>
					Front-End Developer
				</h2>
			</div>

			<div className='header-arrow'>
				<MdKeyboardArrowDown />
			</div>
		</header>
	);
};

export default Header;
