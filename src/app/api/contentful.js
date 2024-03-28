"use client";

export async function getEntries() {
	const contentful = require("contentful");

	const client = contentful.createClient({
		space: process.env.SPACE_ID,
		environment: "master",
		accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
	});

	return client
		.getEntries()
		.then((entries) => {
			return entries.items;
		})
		.catch(console.error);
}

export async function getEntry(id) {
	const contentful = require("contentful");

	const client = contentful.createClient({
		space: process.env.SPACE_ID,
		environment: "master",
		accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
	});

	return client
		.getEntry(id)
		.then((entry) => {
			return entry;
		})
		.catch(console.error);
}

export function contentfulApiGQL(query) {
	const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/651dpynyx4bt`;

	const fetchOptions = {
		method: "POST",
		headers: {
			Authorization: `Bearer aMDd0h_eopxu33mCbUFzzC2WcLg9JKX9ZbzswND_5gc`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify({ query })
	};
	async function fetchGraphQL() {
		try {
			const data = await fetch(fetchUrl, fetchOptions).then((response) =>
				response.json()
			);
			return data;
		} catch (error) {
			throw new Error("Could not fetch data from Contentful!");
		}
	}
	return fetchGraphQL;
}
