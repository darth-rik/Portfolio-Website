import React, { useEffect, useRef, useState } from "react";
import Navigation from "../Navigation";
import Sidebar from "../Sidebar";
import Avatar from "../../images/avatar.jpg";

import { Link } from "react-scroll";

import { MdKeyboardArrowDown } from "react-icons/md";

const Header = ({ arrow = (f) => f }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [mobile, setMobile] = useState(false);
	const sidebar = useRef();
	const backdrop = useRef();
	const header = useRef();
	const nav = useRef();

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
		const height = nav.current.getBoundingClientRect().height;
		const callback = (entries) => {
			const [entry] = entries;
			if (!entry.isIntersecting) nav.current.classList.add("menu-sticky");
			else nav.current.classList.remove("menu-sticky");
		};

		const options = {
			root: null,
			threshold: 0,
			rootMargin: `-${height}px`,
		};

		const observer = new IntersectionObserver(callback, options);

		observer.observe(header.current);
	}, []);

	useEffect(() => {
		const Parallax = () => {
			let positionY = window.pageYOffset / 2;
			header.current.style.backgroundPosition = "0 -" + positionY + "px";
		};
		if (window.screen.width > 1024) window.addEventListener("scroll", Parallax);

		return () => {
			window.removeEventListener("scroll", Parallax);
		};
	}, [header]);

	useEffect(() => {
		if (window.screen.width <= 1200) {
			setMobile(true);
		}
	}, []);

	return (
		<header id='section-1' ref={header} className='header'>
			<div ref={backdrop}>
				<Sidebar closeSidebar={() => setIsOpen(false)} sidebar={sidebar} />
			</div>

			<Navigation
				navigation={nav}
				open={() => (!isOpen ? setIsOpen(true) : setIsOpen(false))}
			/>

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

			{mobile ? (
				<Link to='section-3' smooth={true} spy={true} className='header-arrow'>
					<MdKeyboardArrowDown />
				</Link>
			) : (
				<div onClick={arrow} className='header-arrow'>
					<MdKeyboardArrowDown />
				</div>
			)}
		</header>
	);
};

export default Header;
