const contentful = require("contentful");

const client = contentful.createClient({
	space: process.env.NEXT_PUBLIC_SPACE_ID,
	environment: "master",
	accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
});

export async function getEntries() {
	return client
		.getEntries()
		.then((entries) => {
			return entries.items;
		})
		.catch(console.error);
}

export async function getEntry(id) {
	return client
		.getEntry(id)
		.then((entry) => {
			return entry;
		})
		.catch(console.error);
}
