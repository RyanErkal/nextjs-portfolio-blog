import React from "react";
import { motion } from "framer-motion";

export default function Skill({ skill, children }) {
	const [hover, setHover] = React.useState(false);
	let style = {
		opacity: hover ? 1 : 0,
		transition: "opacity 0.3s ease-in-out"
	};

	function handleMouseEnter() {
		setHover(true);
	}

	function handleMouseLeave() {
		setHover(false);
	}

	return (
		<div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			<motion.div
				className="p-2 flex flex-col text-center justify-center content-center"
				whileHover={{ scale: 1.1 }}
				transition={{ type: "spring", dampening: 15, stiffness: 100 }}>
				{children}
				<h1
					className=" text-purple-400 font-xl font-bold"
					style={style}>
					{skill}
				</h1>
			</motion.div>
		</div>
	);
}
