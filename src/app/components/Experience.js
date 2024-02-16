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
			id="experience"
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
							Freelance Web Developer 2021 - Present
						</h3>
						<ul className="text-xs">
							<li className="mb-2">
								Designed, developed and maintained responsive
								web apps for clients using Next.js and Tailwind
								CSS. Hosted on Vercel / Netlify. Projects
								consisted of but not limited to e-commerce,
								subscription based education sites and landing
								pages.
							</li>
							<li className="mb-2">
								Utilized AWS ( S3 and Cloudfront ) for image and
								asset hosting, Supabase / Firebase for database
								and authentication, Stripe for payment /
								subscription processing and Contentful CMS.
							</li>
							<li className="mb-2">
								Employed extensive performance and SEO
								optimizations for all projects. Achieving a
								Lighthouse SEO, Accessability and Best Practices
								score of 90+ for all production deployments.
							</li>
							<li className="mb-2">
								Developed excellent communication and project
								management skills. Working with clients to
								understand their needs and deliver a product
								that meets their expectations in a timely
								fashion.
							</li>
						</ul>
						<br />
						<h3 className="text-lg font-bold mb-2">
							QA Engineer at McAfee 2018 - 2019
						</h3>
						<ul className="text-xs">
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
