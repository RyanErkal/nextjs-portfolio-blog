"use client";

import Skill from "./Skill";
import { motion } from "framer-motion";
import { styled } from "styled-components";
import {
	HTML,
	CSS,
	JS,
	TS,
	ReactSVG,
	FirebaseSVG,
	Node,
	Git,
	GitHub,
	Python,
	TailwindSVG,
	NextSVG
} from "./svgs/index";

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

function FadeInWhenVisible({ children }) {
	const spring = {
		type: "spring",
		damping: 15,
		stiffness: 100
	};

	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			transition={spring}
			variants={{
				visible: { opacity: 1, scale: 1 },
				hidden: { opacity: 0, scale: 0.5 }
			}}>
			{children}
		</motion.div>
	);
}

export default function Skills() {
	return (
		<div
			id="skills"
			className="h-screen bg-slate-800 flex flex-col justify-center items-center text-center">
			<FadeInWhenVisible>
				<GradientTitle>Skills</GradientTitle>
				<div className="grid grid-cols-3 grid-flow-row gap-0 xl:gap-4">
					<Skill skill="HTML">
						<HTML />
					</Skill>
					<Skill skill="CSS">
						<CSS />
					</Skill>
					<Skill skill="Javascript">
						<JS />
					</Skill>
					<Skill skill="Typescript">
						<TS />
					</Skill>
					<Skill skill="React">
						<ReactSVG />
					</Skill>
					<Skill skill="Next JS">
						<NextSVG />
					</Skill>
					<Skill skill="Node">
						<Node />
					</Skill>
					<Skill skill="Firebase">
						<FirebaseSVG />
					</Skill>
					<Skill skill="Git">
						<Git />
					</Skill>
					<Skill skill="GitHub">
						<GitHub />
					</Skill>
					<Skill skill="Python">
						<Python />
					</Skill>
					<Skill skill="Tailwind CSS">
						<TailwindSVG />
					</Skill>
				</div>
			</FadeInWhenVisible>
		</div>
	);
}
