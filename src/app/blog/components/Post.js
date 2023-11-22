import Link from "next/link";
import Image from "next/image";

export default function Post({ post }) {
	console.log(post);

	let dateString = new Date(post.fields.date).toLocaleDateString("en-UK", {
		year: "numeric",
		month: "short",
		day: "numeric"
	});

	console.log(post.fields.header.fields.file.url);

	return (
		<div className="mb-4 p-2 bg-slate-800 text-slate-100 rounded-xl max-w-md">
			<Link
				href={`/blog/post?id=${post.sys.id}`}
				className="flex flex-col items-center">
				<Image
					width={900}
					height={400}
					src={`https:${post.fields.header.fields.file.url}`}
					alt={post.fields.header.fields.title}
					className="rounded-lg mb-2"
				/>
				<div>
					<h1 className="text-xl font-bold">{post.fields.title}</h1>
					<p className="text-sm text-slate-200">{dateString}</p>
				</div>
			</Link>
		</div>
	);
}

/* {
    "tags" : [
        "freelance", "web dev"
    ]
} */
