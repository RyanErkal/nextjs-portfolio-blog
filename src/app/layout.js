import "./globals.css";

export const metadata = {
	title: "Ryan Erkal",
	description: "Generated by myself"
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
