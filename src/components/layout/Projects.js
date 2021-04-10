import React from "react";
import StringZWall from "../../images/stringz-bg.png";
import FoodHuntWall from "../../images/foodhunt-bg.png";
import TodoAppWall from "../../images/todoapp-bg.png";

const Projects = ({ projects }) => {
	return (
		<section id='section-2' ref={projects} className='section-projects'>
			<div className='container'>
				<h1 className='heading__primary u-margin-bottom-small'>
					Personal Projects
				</h1>
				<hr
					className='u-margin-bottom-medium'
					style={{ width: "5%", margin: "0 auto", marginBottom: "2rem" }}
				/>
				<div className='projects-container'>
					<div className='project project--1'>
						<div className='project__img u-margin-bottom-small'>
							<img src={StringZWall} alt='' />
							<p>
								StringZ is a social media website meant for musicians. <br />{" "}
								The project was built using <strong>ReactJS</strong> ,{" "}
								<strong>Redux</strong> and <strong>Material-UI</strong> on the
								Front-End and <strong>NodeJS</strong>, <strong>MongoDB</strong>{" "}
								on the Back-End. To host the profile images,
								<strong> Cloudinary</strong>'s media storage platform was used.
							</p>
						</div>
						<h2 className='u-margin-bottom-x-small'>StringZ</h2>
						<div className='project__buttons'>
							<a
								href='https://stringz1.herokuapp.com'
								target='_blank'
								rel='noreferrer'
							>
								<button className='btn btn--black btn--small'>Live Site</button>
							</a>
							<a
								href='https://github.com/darth-rik/StringZ'
								target='_blank'
								rel='noreferrer'
							>
								<button className='btn btn--white btn--small'>View Code</button>{" "}
							</a>
						</div>
					</div>
					<div className='project project--2'>
						<div className='project__img u-margin-bottom-small'>
							<img src={FoodHuntWall} alt='' />
							<p>
								FoodHunt is a web app to search for amazing recipes from around
								the world. <br /> The project was built using{" "}
								<strong>ReactJS</strong> , <strong> React Context-API</strong>{" "}
								and <strong>Tailwind CSS</strong>.
							</p>
						</div>
						<h2 className='u-margin-bottom-x-small'>FoodHunt</h2>
						<div className='project__buttons'>
							<a
								href='https://food-hunt.netlify.app'
								target='_blank'
								rel='noreferrer'
							>
								<button className='btn btn--black btn--small'>Live Site</button>
							</a>
							<a
								href='https://github.com/darth-rik/FoodHunt'
								target='_blank'
								rel='noreferrer'
							>
								<button className='btn btn--white btn--small'>
									{" "}
									View Code
								</button>
							</a>
						</div>
					</div>
					<div className='project project--3'>
						<div className='project__img u-margin-bottom-small'>
							<img src={TodoAppWall} alt='' />
							<p>
								A web application to organize daily tasks. <br /> Some of the
								enhanced features include <u>dark mode</u> ,{" "}
								<u>a clear button to clear all the completed todos</u> ,{" "}
								<u>drag and drop functionality to rearrange the todo list</u>{" "}
								etc. <br /> The project was made using vanilla{" "}
								<strong>Javascript</strong> and <strong>CSS</strong>
							</p>
						</div>
						<h2 className='u-margin-bottom-x-small'>Todo App</h2>
						<div className='project__buttons'>
							<a
								href='https://todo-app-xtra.netlify.app'
								target='_blank'
								rel='noreferrer'
							>
								<button className='btn btn--black btn--small'>Live Site</button>
							</a>
							<a
								href='https://github.com/darth-rik/Todo_App'
								target='_blank'
								rel='noreferrer'
							>
								<button className='btn btn--white btn--small'>
									{" "}
									View Code
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
