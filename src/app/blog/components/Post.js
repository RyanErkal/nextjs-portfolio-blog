import Link from "next/link";

export default function Post({ post }) {
	console.log(post);

	let dateString = new Date(post.fields.date).toLocaleDateString("en-UK", {
		year: "numeric",
		month: "short",
		day: "numeric"
	});

	return (
		<div className="mt-4 p-2 bg-slate-800 text-slate-100 rounded-xl">
			<Link href={`/blog/post?id=${post.sys.id}`}>
				<img
					src={post.fields.header.fields.file.url}
					alt={post.fields.header.fields.title}
					className="rounded-lg mb-2"
				/>
				<h1 className="text-xl font-bold">{post.fields.title}</h1>
				<p className="text-sm text-slate-200">{dateString}</p>
			</Link>
		</div>
	);
}

/* {
    "tags" : [
        "freelance", "web dev"
    ]
} */
