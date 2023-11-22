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
		<div className="mb-4 p-2 bg-slate-800 text-slate-100 rounded-xl">
			<Link href={`/blog/post?id=${post.sys.id}`}>
				<Image
					width={600}
					height={400}
					src={`https:${post.fields.header.fields.file.url}`}
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
