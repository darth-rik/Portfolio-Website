import React from "react";
import PropTypes from "prop-types";

const Sidebar = ({ sidebar }) => {
	return (
		<div ref={sidebar} className='sidebar'>
			<div className='sidebar__heading'>
				<h2>Menu</h2>
			</div>
			<ul className='sidebar__links'>
				<li>
					<a href='//#region '>Home</a>{" "}
				</li>
				<li>
					<a href='//#region '>Projects</a>
				</li>
				<li>
					<a href='//#region '>About</a>
				</li>
				<li>
					<a href='//#region '>Contact</a>
				</li>
			</ul>
		</div>
	);
};

Sidebar.propTypes = {
	sidebar: PropTypes.object.isRequired,
};

export default Sidebar;
