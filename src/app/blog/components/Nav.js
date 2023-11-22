"use client";

import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import scrollLock from "scroll-lock";
import Link from "next/link";

export default function Nav() {
	const [nav, setNav] = useState(false);

	function showNav() {
		setNav(!nav);
		scrollLock.toggle();
	}

	return (
		<nav
			id="nav"
			className="flex flex-row justify-between p-4 text-gray-100 bg-slate-900 font-medium text-lg">
			<h1 className="text-xl font-bold text-orange-400">
				<Link href="/blog">Blog</Link>
			</h1>
			<div
				className="flex items-center justify-center sm:hidden fill-current"
				onClick={showNav}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="24"
					viewBox="0 -960 960 960"
					width="24">
					<path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
				</svg>
			</div>

			{/* desktop nav */}
			<ul className="hidden sm:flex flex-row justify-center items-center text-center">
				<li className="mr-4 hover:text-orange-400 transition-all ease-in-out">
					<Link href="./">Portfolio</Link>
				</li>
			</ul>

			{/* mobile nav */}
			<div
				className={`h-[100vh] fixed top-[0px] flex flex-col justify-around items-center w-full md:hidden bg-slate-900 z-40 duration-300 ${
					nav ? "right-[0px]" : "right-[-100vw]"
				} `}>
				{nav && (
					<svg
						onClick={showNav}
						className="fixed right-[30px] top-[30px] fa fa-times text-3xl z-50 md:hidden fill-current"
						xmlns="http://www.w3.org/2000/svg"
						height="24"
						viewBox="0 -960 960 960"
						width="24">
						<path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
					</svg>
				)}
				<Link href="./" className="text-2xl" onClick={showNav}>
					Portfolio
				</Link>
			</div>
		</nav>
	);
}
