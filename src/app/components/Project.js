"use client";

import { motion } from "framer-motion";

export default function Project({ title, tech, github, live, children }) {
	return (
		<motion.div
			className="p-6 bg-slate-100 text-slate-900 rounded-xl"
			whileHover={{ scale: 1.05 }}
			transition={{ type: "spring", dampening: 15, stiffness: 100 }}>
			<h3 className="text-xl font-bold mb-2">{title}</h3>
			<p className="text-sm">{children}</p>
			<div className="flex flex-wrap items-center justify-center mt-2">
				{tech.map((tech) => (
					<a
						href={Object.values(tech)[0]}
						key={Object.keys(tech)[0]}
						className="bg-slate-200 hover:bg-purple-200 text-xs font-bold px-3 py-2 m-2 text-center rounded-xl transition-all ease-in-out cursor-pointer">
						{Object.keys(tech)[0]}
					</a>
				))}
			</div>
			<div className="flex justify-center items-center">
				<a
					href={github}
					className="text-purple-400 hover:text-purple-600 h-6 w-6 mx-2 mt-2 flex items-center justify-center hover:scale-110 transition-all ease-in-out cursor-pointer">
					<svg
						className="text-slate-600 hover:text-purple-400 fill-current"
						xmlns="http://www.w3.org/2000/svg"
						height="24"
						viewBox="0 -960 960 960"
						width="24">
						<path d="m384-336 56-57-87-87 87-87-56-57-144 144 144 144Zm192 0 144-144-144-144-56 57 87 87-87 87 56 57ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
					</svg>
				</a>
				<a
					href={live}
					className="text-purple-400 hover:text-purple-600 h-fit w-fit mx-2 mt-2 flex items-center justify-center hover:scale-110 transition-all ease-in-out cursor-pointer">
					<svg
						className="text-slate-600 hover:text-purple-400 fill-current"
						xmlns="http://www.w3.org/2000/svg"
						height="24"
						viewBox="0 -960 960 960"
						width="24">
						<path d="M320-120v-80h80v-80H160q-33 0-56.5-23.5T80-360v-400q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v400q0 33-23.5 56.5T800-280H560v80h80v80H320ZM160-360h640v-400H160v400Zm0 0v-400 400Z" />
					</svg>
				</a>
			</div>
		</motion.div>
	);
}
