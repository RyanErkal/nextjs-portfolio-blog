"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

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
			className="h-screen p-4 bg-slate-800 flex justify-center items-center text-center">
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
					<GradientTitle>About</GradientTitle>
					<p className="text-xs xl:text-sm text-slate-100">
						Disciplined Freelance Web Developer with a strong
						foundation in{" "}
						<span className="text-purple-400 font-bold">
							JavaScript
						</span>{" "}
						and{" "}
						<span className="text-purple-400 font-bold">
							React.
						</span>{" "}
						Proficient in creating responsive web applications and
						committed to creating clean, well organized, semantic
						code. Currently looking for a new role to bring my
						technical skills, problem-solving abilities and
						process-driven approach to larger scale projects.
					</p>
				</div>
			</motion.div>
		</div>
	);
}
