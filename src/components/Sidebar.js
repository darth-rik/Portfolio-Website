import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-scroll";

const Sidebar = ({ sidebar, closeSidebar }) => {
	const closePane = (e) => {
		closeSidebar();
	};
	return (
		<div ref={sidebar} className='sidebar'>
			<div className='sidebar__heading'>
				<h2>Menu</h2>
			</div>
			<ul className='sidebar__links'>
				<li>
					<Link
						onClick={closePane}
						to='section-1'
						className='link'
						smooth={true}
						spy={true}
					>
						Home
					</Link>
				</li>
				<li>
					<Link
						onClick={closePane}
						to='section-2'
						className='link'
						smooth={true}
						spy={true}
					>
						{" "}
						Projects
					</Link>
				</li>
				<li>
					<Link
						onClick={closePane}
						to='section-3'
						className='link'
						smooth={true}
						spy={true}
					>
						{" "}
						About
					</Link>
				</li>
				<li>
					<Link
						onClick={closePane}
						to='section-4'
						className='link'
						smooth={true}
						spy={true}
					>
						Contact
					</Link>
				</li>
			</ul>
		</div>
	);
};

Sidebar.propTypes = {
	sidebar: PropTypes.object.isRequired,
};

export default Sidebar;
