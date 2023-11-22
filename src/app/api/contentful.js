const contentful = require("contentful");

const client = contentful.createClient({
	space: "651dpynyx4bt",
	environment: "master",
	accessToken: "aMDd0h_eopxu33mCbUFzzC2WcLg9JKX9ZbzswND_5gc"
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
