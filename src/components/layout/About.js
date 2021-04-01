import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = ({ about }) => {
	return (
		<section id='section-3' ref={about} className='section-about'>
			<div className='description'>
				<h2 className='description__heading--primary u-margin-bottom-x-small'>
					Hello, I'm Debanjit
				</h2>
				<h4 className='description__heading--secondary u-margin-bottom-x-small'>
					Web Developer from India
				</h4>

				<p className='paragraph'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh
					felis, rutrum id eleifend nec, viverra ac nunc. Fusce sit amet
					interdum metus, a interdum massa. Nullam gravida, elit sed mattis
					semper, libero leo convallis mi, et elementum magna tortor sed tortor.
					Aliquam hendrerit metus non enim fringilla, eu molestie ante bibendum.
				</p>
				<div className='description__full-story u-margin-bottom-small'>
					<a href=''>Read my story </a>
					<BsArrowRight />
				</div>

				<ul className='description__icons u-margin-bottom-x-small'>
					<li>
						<a href=''>
							<FaGithub />
						</a>
					</li>
					<li>
						<a href=''>
							<FaLinkedin />
						</a>
					</li>
				</ul>
				<div className='description__btn '>
					<button className=' btn btn--black'>View Resume</button>
				</div>
			</div>
		</section>
	);
};

export default About;
