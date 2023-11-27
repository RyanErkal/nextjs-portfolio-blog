"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { styled } from "styled-components";

const spring = {
	type: "spring",
	damping: 15,
	stiffness: 100
};

const GradientName = styled.h1`
	font-weight: 700;
	font-size: 3rem;
	background-color: #f3ec78;
	background-image: linear-gradient(45deg, #e0aaff, #5a189a);
	background-size: 100%;
	-webkit-background-clip: text;
	-moz-background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-text-fill-color: transparent;
`;

export default function Name() {
	const [opacity, setOpacity] = useState(1);

	useEffect(() => {
		const handleScroll = () => {
			const newOpacity = Math.max(1 - window.scrollY / 300, 0);
			setOpacity(newOpacity);
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			<div className="h-full min-h-screen p-6 bg-slate-800 text-slate-100 flex justify-center items-center text-center">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					transition={spring}
					variants={{
						visible: { opacity: 1, scale: 1 },
						hidden: { opacity: 0, scale: 0 }
					}}>
					<p className="text-2xl mb-[-1rem]">Hello my name is</p>
					<GradientName>Ryan Erkal</GradientName>
				</motion.div>
				<motion.div
					className="absolute bottom-0 animate-bounce"
					style={{ opacity }}>
					<AnchorLink href="#about">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="24"
							viewBox="0 -960 960 960"
							width="24"
							stroke="currentColor"
							fill="currentColor">
							<path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
						</svg>
					</AnchorLink>
				</motion.div>
			</div>
		</>
	);
}
