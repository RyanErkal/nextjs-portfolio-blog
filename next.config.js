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
		CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
		SPACE_ID: process.env.SPACE_ID
	}
};

module.exports = nextConfig;
