import React from "react";
import PropTypes from "prop-types";

import { VscMenu } from "react-icons/vsc";

const Navigation = ({ open }) => {
	const menu = () => {
		open();
	};
	return (
		<div className='navigation'>
			<div className='navigation-container'>
				<div onClick={menu} className='navigation-container__menu'>
					<p>Menu</p>
					<VscMenu />
				</div>
			</div>
		</div>
	);
};

Navigation.propTypes = {
	open: PropTypes.func.isRequired,
};

export default Navigation;
