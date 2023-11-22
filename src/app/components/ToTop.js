import AnchorLink from "react-anchor-link-smooth-scroll";

export default function ToTop() {
	return (
		<div className="absolute animate-bounce bottom-0 w-full flex justify-center items-center">
			<AnchorLink href="#nav">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="24"
					viewBox="0 -960 960 960"
					width="24"
					stroke="currentColor"
					fill="currentColor">
					<path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" />
				</svg>
			</AnchorLink>
		</div>
	);
}
