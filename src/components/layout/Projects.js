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
								Lorem, ipsum dolor sit amet consectetur adipisicing elit.
								Voluptatum beatae nobis aliquam optio? Nemo nostrum sint velit
								ad cupiditate iusto nulla alias deleniti aliq
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
							<button className='btn btn--white btn--small'> View Code</button>
						</div>
					</div>
					<div className='project project--2'>
						<div className='project__img u-margin-bottom-small'>
							<img src={FoodHuntWall} alt='' />
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit.
								Voluptatum beatae nobis aliquam optio? Nemo nostrum sint velit
								ad cupiditate iusto nulla alias deleniti aliq
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
							<button className='btn btn--white btn--small'> View Code</button>
						</div>
					</div>
					<div className='project project--3'>
						<div className='project__img u-margin-bottom-small'>
							<img src={TodoAppWall} alt='' />
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit.
								Voluptatum beatae nobis aliquam optio? Nemo nostrum sint velit
								ad cupiditate iusto nulla alias deleniti aliq
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
							<button className='btn btn--white btn--small'> View Code</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
