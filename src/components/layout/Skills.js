import React from "react";
import HtmlIcon from "../../images/html5.svg";
import CssIcon from "../../images/css3.svg";
import JavascriptIcon from "../../images/javascript.svg";
import ReactIcon from "../../images/react.png";
import SassIcon from "../../images/sass.svg";
import NodeIcon from "../../images/nodejs.svg";
import MaterialIcon from "../../images/material-ui.svg";
import TailwindIcon from "../../images/tailwindcss.svg";
import MongoIcon from "../../images/mongodb-icon.svg";
import FigmaIcon from "../../images/figma.svg";

const Skills = ({ skills }) => {
	return (
		<section id='section-3' ref={skills} className='section-skills'>
			<div className='container'>
				<h2 className='heading__primary u-margin-bottom-big'>Skills</h2>
				<div className='icons-container'>
					<div className='icons-container__icon'>
						<img
							className='icons-container__icon-image'
							src={HtmlIcon}
							alt=''
						/>
						<p className='icons-container__icon-text'>HTML5</p>
					</div>
					<div className='icons-container__icon'>
						<img className='icons-container__icon-image' src={CssIcon} alt='' />
						<p className='icons-container__icon-text'>CSS</p>
					</div>
					<div className='icons-container__icon'>
						<img
							className='icons-container__icon-image'
							src={JavascriptIcon}
							alt=''
						/>
						<p className='icons-container__icon-text'>JavaScript</p>
					</div>
					<div className='icons-container__icon'>
						<img
							className='icons-container__icon-image'
							src={SassIcon}
							alt=''
						/>
						<p className='icons-container__icon-text'>Sass</p>
					</div>
					<div className='icons-container__icon'>
						<img
							className='icons-container__icon-image'
							src={ReactIcon}
							alt=''
						/>
						<p className='icons-container__icon-text'>React</p>
					</div>
					<div className='icons-container__icon'>
						<img
							className='icons-container__icon-image'
							src={NodeIcon}
							alt=''
						/>
						<p className='icons-container__icon-text'>NodeJS</p>
					</div>
					<div className='icons-container__icon'>
						<img
							className='icons-container__icon-image'
							src={MongoIcon}
							alt=''
						/>
						<p className='icons-container__icon-text'>MongoDB</p>
					</div>
					<div className='icons-container__icon'>
						<img
							className='icons-container__icon-image'
							src={MaterialIcon}
							alt=''
						/>
						<p className='icons-container__icon-text'>Material-UI</p>
					</div>
					<div className='icons-container__icon'>
						<img
							className='icons-container__icon-image'
							src={TailwindIcon}
							alt=''
						/>
						<p className='icons-container__icon-text'>Tailwind CSS</p>
					</div>
					<div className='icons-container__icon'>
						<img
							className='icons-container__icon-image'
							src={FigmaIcon}
							alt=''
						/>
						<p className='icons-container__icon-text'>Figma</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
