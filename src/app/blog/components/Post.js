import Link from "next/link";
import Image from "next/image";

export default function Post({ post }) {
	let dateString = new Date(post.date).toLocaleDateString("en-UK", {
		year: "numeric",
		month: "short",
		day: "numeric"
	});

	return (
		<div className="mb-4 p-2 bg-slate-800 text-slate-100 rounded-xl max-w-sm">
			<Link
				href={`/blog/post?id=${post.sys.id}`}
				className="flex flex-col items-center">
				<Image
					width={900}
					height={400}
					src={post.header.url}
					alt={post.title}
					className="rounded-lg mb-2"
				/>
				<div className="w-full">
					<h1 className="text-xl font-bold">{post.title}</h1>
					<p className="text-sm text-slate-200">{dateString}</p>
				</div>
			</Link>
		</div>
	);
}
