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
			className="h-screen p-4 bg-slate-800 color-slate-100 flex justify-center items-center text-center">
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
					<p className="text-xs xl:text-sm">
						Lrem ipsum dolor sit amet, consectetur adipiscing elit.
						Aliquam at porttitor sem. Aliquam erat volutpat. Donec
						placerat nisl magna, et faucibus arcu condimentum sed.
					</p>
				</div>
			</motion.div>
		</div>
	);
}
