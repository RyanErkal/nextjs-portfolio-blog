import Nav from "./components/Nav";
import Name from "./components/Name";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
	return (
		<div className="">
			<Nav />
			<Name />
			<About />
			<Skills />
			<Experience />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
}
