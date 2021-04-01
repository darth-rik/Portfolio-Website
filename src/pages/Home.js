import React, { useEffect, useRef } from "react";
import Header from "../components/layout/Header";
import About from "../components/layout/About";
import Skills from "../components/layout/Skills";
import Contact from "../components/layout/Contact";
import Projects from "../components/layout/Projects";
import Footer from "../components/layout/Footer";

const Home = () => {
	const about = useRef();
	const skills = useRef();
	const projects = useRef();
	const contact = useRef();

	const refs = [about, skills, projects, contact];

	useEffect(() => {
		const revealSection = function (entries, observer) {
			const [entry] = entries;

			if (!entry.isIntersecting) return;

			entry.target.classList.remove("section-hidden");
			observer.unobserve(entry.target);
		};

		const sectionObserver = new IntersectionObserver(revealSection, {
			root: null,
			threshold: 0.25,
		});
		refs.forEach((ref) => {
			sectionObserver.observe(ref.current);
			ref.current.classList.add("section-hidden");
		});

		return () =>
			refs.forEach((ref) => {
				sectionObserver.unobserve(ref.current);
				ref.current.classList.remove("section-hidden");
			});
	}, []);

	return (
		<div>
			<Header
				arrow={() => about.current.scrollIntoView({ behavior: "smooth" })}
			/>
			<About about={about} />
			<Skills skills={skills} />
			<Projects projects={projects} />
			<Contact contact={contact} />
			<Footer />
		</div>
	);
};

export default Home;
