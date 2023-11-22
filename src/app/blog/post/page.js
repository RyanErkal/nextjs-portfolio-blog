"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getEntry } from "../../api/contentful";
import Markdown from "react-markdown";
import Nav from "../components/Nav";
import ToTop from "../../components/ToTop";
import Footer from "../../components/Footer";
import "../../globals.css";

export default function Page() {
	const [post, setPost] = useState();
	const [body, setBody] = useState();
	const id = useSearchParams().get("id");

	useEffect(() => {
		getEntry(id).then((response) => {
			setPost(response);
			setBody(response.fields.body);
		});
	}, [id]);

	return (
		<div className="bg-slate-800 min-h-screen max-w-screen overflow-hidden">
			<Nav />
			{post ? (
				<div className="p-4 pb-8 text-slate-100 relative">
					<h1 className="text-2xl font-bold">{post.fields.title}</h1>
					<img
						className="w-full rounded-lg my-4"
						src={post.fields.header.fields.file.url}
						alt={post.fields.header.fields.title}
					/>
					<Markdown className="prose prose-slate prose-invert mb-4">
						{body}
					</Markdown>
					<ToTop />
				</div>
			) : (
				<div className="h-screen">Loading...</div>
			)}

			<Footer />
		</div>
	);
}
