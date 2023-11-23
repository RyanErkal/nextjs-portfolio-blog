/** @type {import('next').NextConfig} */
const nextConfig = {
	compiler: {
		styledComponents: true
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.ctfassets.net"
			}
		]
	},
	env: {
		NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN:
			process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
		NEXT_PUBLIC_SPACE_ID: process.env.NEXT_PUBLIC_SPACE_ID
	}
};

module.exports = nextConfig;
