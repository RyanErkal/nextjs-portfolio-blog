"use client";

import { motion } from "framer-motion";
import { styled } from "styled-components";

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

export default function About() {
	return (
		<div
			id="about"
			className="h-screen p-4 bg-slate-800 text-slate-100 flex justify-center items-center text-center">
			<motion.div
				className="text-xl w-full flex flex-col justify-center items-center text-center"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				transition={{
					type: "spring",
					damping: 15,
					stiffness: 100
				}}
				variants={{
					visible: { opacity: 1, scale: 1 },
					hidden: { opacity: 0, scale: 0 }
				}}>
				<div className="w-full sm:w-4/6 lg:max-w-2xl">
					<GradientTitle>Experience</GradientTitle>
					<div className="text-xs xl:text-sm">
						<h3 className="text-lg font-bold mb-2 ">
							Freelance Web Developer 2019 - Present
						</h3>
						<ul className="">
							<li className="mb-2">
								Developed and maintained responsive landing
								pages using React and Tailwind with Stripe and
								Calendly integration, resulting in an increase
								in lead generation and conversion rate by up to
								30% and 50% respectively.
							</li>
							<li className="mb-2">
								Utilized Wordpress and Shopify to allow clients
								to upsell their customers using popular SEO
								optimization tools and conventions.
							</li>
							<li className="mb-2">
								Emphasized a client-centric approach in website
								adjustments, employing CI/CD methodologies to
								streamline the deployment of visual and
								structural enhancements based on client
								feedback.
							</li>
							<li className="mb-2">
								Exercised strong communication and problem
								solving skills, ability to convey ideas and
								instructions to a variety of personality types
								in both a 1-1 and team setting.
							</li>
						</ul>
						<br />
						<h3 className="text-lg font-bold mb-2">
							QA Engineer at McAfee 2018 - 2019
						</h3>
						<ul className="">
							<li className="mb-2">
								Developed and maintained automation library
								using Selenium in C# for mobile and web
								automation testing.
							</li>
							<li className="mb-2">
								Collaborated with the team, implementing agile
								methodologies for project efficiency, utilizing
								Jira for workflow management, issue tracking and
								sprint planning.
							</li>
						</ul>
					</div>
				</div>
			</motion.div>
		</div>
	);
}
