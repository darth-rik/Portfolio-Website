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
					A Web Developer from India
				</h4>
				<p className='paragraph u-margin-bottom-small'>
					{/* I never would have thought that programming would be so rewarding,
					until I had built a few projects with HTML, CSS and Javascript. It was
					an ardous task at first, especially since I was just starting out. But
					the joy and happiness that came with completing a project was
					something out of this world. And it was this reason that kept me
					going. Kept me motivated to learn more. <br /> I am aware that the
					technology world changes at a very fast pace and one has to constantly
					keep themselves updated. Hence, I made sure to learn and use
					frameworks and tools such as React, Sass, Material-UI, Tailwind CSS in
					order to efficiently build beautiful modern websites and apps. <br />{" "}
					Web Development has never been "just a job" for me, but a challenge to
					improve my skills, to learn new things and create high quality
					websites and applications. */}
					I welcome you to my website. I am a Front-End Developer having
					experience in buiding full stack applications. Here you will find the
					projects I built using the technology skills that I currently possess.
					The first two projects are built from scratch with the designs I
					created in Figma. <br /> I am now looking forward to work in an
					environment where I can better utilise my skills and become a better
					developer. <br /> If you have any questions or any queries please feel
					free to contact me directly.
				</p>
				{/* <div className='description__full-story '>
					{/* <a href=''>Read my story </a> */}
				{/* <BsArrowRight /> */}
				{/* </div> */}
				<ul className='description__icons u-margin-bottom-x-small'>
					<li>
						<a href='https://github.com/darth-rik'>
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
					<a
						style={{ color: "#fff" }}
						href='../../docs/DEBANJIT_SENGUPTA_Software_Developer.pdf'
						className=' btn btn--black'
						download
					>
						View Resume
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
