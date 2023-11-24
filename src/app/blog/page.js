"use client";

import { useEffect, useRef, useState } from "react";
import { contentfulApiGQL } from "../api/contentful";
import Nav from "./components/Nav";
import Post from "./components/Post";
import Footer from "../components/Footer";

export default function Blog() {
	const [posts, setPosts] = useState();
	const [load, setLoad] = useState(10);
	const total = useRef();

	useEffect(() => {
		/* getEntries().then((response) => {
			setPosts(response);
		}); */
		contentfulApiGQL(`{
			blogPostCollection(limit: ${load}, skip: 0, order: date_DESC){
				total
				items {
				  sys {
					id
				  }
				  date
				  title
				  header {
					title
					description
					contentType
					fileName
					size
					url
					width
					height
				  }
				}
			}
		  }`)().then((response) => {
			setPosts(response.data.blogPostCollection.items);
			total.current = response.data.blogPostCollection.total;
		});
	}, [load]);

	const handleLoadMore = () => {
		if (!(load > total.current)) {
			setLoad(load + 10);
		}
	};

	return (
		<div className="bg-slate-800 min-h-screen h-full w-screen overflow-hidden flex flex-col justify-between">
			<Nav />
			<div className="flex flex-col items-center">
				<div className="p-2 pb-4 relative grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
					{!posts ? (
						<div className="h-screen">Loading...</div>
					) : (
						posts.map((post) => {
							return <Post key={post.sys.id} post={post} />;
						})
					)}
				</div>
			</div>
			<div className="flex justify-center relative">
				<button
					className="bg-slate-700 text-white px-4 py-2 mx-8 mb-4 w-full lg:w-fit rounded-xl hover:bg-slate-600 transition-all"
					onClick={handleLoadMore}>
					Load More
				</button>
			</div>
			<Footer />
		</div>
	);
}
