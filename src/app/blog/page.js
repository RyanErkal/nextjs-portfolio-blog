"use client";

import { useEffect, useState } from "react";
import { getEntries } from "../api/contentful";
import Nav from "./components/Nav";
import ToTop from "../components/ToTop";
import Footer from "../components/Footer";
import Post from "./components/Post";

export default function Blog() {
	const [posts, setPosts] = useState();

	useEffect(() => {
		getEntries().then((response) => {
			setPosts(response);
		});
	}, []);

	return (
		<div className="bg-slate-800 min-h-screen h-full w-screen overflow-hidden flex flex-col justify-between">
			<Nav />
			<div className="flex flex-col items-center">
				<div className="p-2 pb-8 relative grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
					{!posts ? (
						<div className="h-screen">Loading...</div>
					) : (
						posts.map((post) => {
							return <Post key={post.sys.id} post={post} />;
						})
					)}
					<ToTop />
				</div>
			</div>
			<Footer />
		</div>
	);
}
