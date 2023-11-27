"use client";

import { useEffect, useState } from "react";
import Project from "./Project";
import { motion } from "framer-motion";
import { styled } from "styled-components";
import { contentfulApiGQL } from "../api/contentful";

const GradientTitle = styled.h1`
	font-weight: 700;
	font-size: 2rem;
	margin-bottom: 1rem;
	background-color: #f3ec78;
	background-image: linear-gradient(45deg, #c77dff, #7b2cbf);
	background-size: 100%;
	-webkit-background-clip: text;
	-moz-background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-text-fill-color: transparent;
`;

export default function Projects() {
	const [projects, setProjects] = useState();

	useEffect(() => {
		/* getEntries().then((response) => {
			setPosts(response);
		}); */
		contentfulApiGQL(`{
			projectCollection(order: sys_firstPublishedAt_ASC){
			  items {
				title
				description
				tech
				github
				live
				imagesCollection{
					items{
					  url
					}
				  }
				sys{
					firstPublishedAt
				  }
			  }
			}
		  }`)().then((response) => {
			setProjects(response.data.projectCollection.items);
		});
	}, []);

	const spring = {
		type: "spring",
		damping: 15,
		stiffness: 100
	};

	return (
		<div
			id="projects"
			className="h-content min-h-screen p-4 bg-slate-800 flex flex-col justify-center items-center text-center w-full">
			<motion.div
				className="w-full sm:w-4/6 max-w-2xl"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				transition={spring}
				variants={{
					visible: { opacity: 1, scale: 1 },
					hidden: { opacity: 0, scale: 0.5 }
				}}>
				<GradientTitle>Projects</GradientTitle>
				<div className="grid grid-cols-1 gap-4">
					{!projects ? (
						<div className="h-screen">Loading...</div>
					) : (
						projects.map((project) => {
							return (
								<Project
									title={project.title}
									key={project.title}
									images={project.imagesCollection.items}
									tech={project.tech.techList}
									github={project.github}
									live={project.live}>
									{project.description}
								</Project>
							);
						})
					)}

					{/* <Project
						title="Stripe Clone"
						tech={[
							{ React: "https://react.dev" },
							{
								"React Router":
									"https://reactrouter.com/en/main"
							},
							{ "Tailwind CSS": "https://tailwindcss.com/" },
							{ Firebase: "https://firebase.google.com/" },
							{ Recharts: "https://recharts.org/en-US" }
						]}
						github="https://github.com/RyanErkal/Stripe-Clone"
						live="https://erkalstripeclone.netlify.app/">
						Stripe clone with user authentication
					</Project>
					<Project
						title="Blog"
						tech={[
							{ React: "https://react.dev" },
							{
								"Next JS": "https://nextjs.org/"
							},
							{ "Tailwind CSS": "https://tailwindcss.com/" },
							{ Contentful: "https://www.contentful.com/" },
							{ GraphQL: "https://graphql.org/" }
						]}
						github="https://github.com/RyanErkal/nextjs-portfolio-blog"
						live="https://ryanerkal.vercel.app/blog">
						Personal blog using Contentful CMS and GraphQL
					</Project>
					<Project
						title="E-Commerce Site"
						tech={[
							{ "Next JS": "https://nextjs.org/" },
							{ Zustand: "https://zustand-demo.pmnd.rs/" },
							{ "Tailwind CSS": "https://tailwindcss.com/" },
							{ "Daisy UI": "https://daisyui.com/" },
							{ "Stripe API": "https://stripe.com/docs/api" }
						]}
						github="https://github.com/RyanErkal/ecom"
						live="https://erkalcommerce.vercel.app/">
						Functional E-Commerce site with Stripe integration
					</Project>
					<Project
						title="Time"
						tech={[
							{ React: "https://react.dev" },
							{
								"React Router":
									"https://reactrouter.com/en/main"
							},
							{ "Tailwind CSS": "https://tailwindcss.com/" },
							{ Firebase: "https://firebase.google.com/" },
							{ Recharts: "https://recharts.org/en-US" }
						]}
						github="/"
						live="/">
						Time tracking & Productivity app with user
						authentication and data visualization, work in progress
					</Project> */}
				</div>
			</motion.div>
		</div>
	);
}
