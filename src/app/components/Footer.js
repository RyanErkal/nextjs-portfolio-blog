import React from "react";

export default function Footer() {
	return (
		<footer className="bg-slate-900 bottom-0">
			<div className="mx-auto w-full max-w-screen-xl p-4 py-6">
				<div className="">
					<span className="text-xs text-slate-300">
						©2023 Ryan Erkal
					</span>
					<div className="flex mt-4 space-x-5">
						<a
							href="https://github.com/RyanErkal"
							className="text-slate-300 hover:text-slate-100 cursor-pointer transition-all ease-in-out">
							<svg
								className="w-4 h-4"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
									clipRule="evenodd"
								/>
							</svg>
							<span className="sr-only">GitHub account</span>
						</a>
						<a
							href="https://www.linkedin.com/in/ryan-erkal-182768160/"
							className="text-slate-300 hover:text-slate-100 cursor-pointer transition-all ease-in-out">
							<svg
								className="w-4 h-4"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 24 24">
								<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
							</svg>
							<span className="sr-only">LinkedIn account</span>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
