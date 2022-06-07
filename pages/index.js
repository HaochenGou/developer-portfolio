import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const GithubProfileCard = dynamic(() =>
	import("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";
import SEO from "../components/SEO";
const firebaseConfig = {
	apiKey: "AIzaSyAeCAI8OO1creP22V6Qe3NRRNTJBkLtQTs",
	authDomain: "canadian-website-design-40f4e.firebaseapp.com",
	projectId: "canadian-website-design-40f4e",
	storageBucket: "canadian-website-design-40f4e.appspot.com",
	messagingSenderId: "180584071825",
	appId: "1:180584071825:web:4b1e7a6e44be62bb34f530",
	measurementId: "G-YVT7MRKSG6"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  

export default function Home({ githubProfileData }) {
	return (
		<div>
			<SEO
				data={{
					title: "Haochen Gou",
					description:
						"A passionate Full Stack Web Developer and Blockchain Developer.",
					image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
					url: "https://developer-portfolio-1hanzla100.vercel.app",
					keywords: [
						"Haochen Gou",
						"Website",
						"Developer",
						"SEO",
						"Application",
												
					],
				}}
			/>
			<Navigation />
			<Greetings />
			<Skills />
			<Proficiency />
			<Education />
			<Experience />
			<Feedbacks />
			<Projects />
			<GithubProfileCard prof={githubProfileData} />
		</div>
	);
}

Home.prototype = {
	githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
	const githubProfileData = await fetch(
		`https://api.github.com/users/${openSource.githubUserName}`
	).then((res) => res.json());

	return {
		props: { githubProfileData },
	};
}
