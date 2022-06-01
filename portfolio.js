import emoji from "react-easy-emoji";

export const greetings = {
	name: "Haochen Gou",
	title: "Hi all, I'm Haochen",
	description:
		"I'm passionate Full Stack web developer having an experience of web applications with Python, Django, React.js, Next.js and Blockchain development on Ethereum, Solidity, Web3.js, Moralis, and Brownie Framework.",
	resumeLink:
		"https://www.linkedin.com/in/haochen-gou-397823219/",
};

export const openSource = {
	githubUserName: "HaochenGou",
};

export const contact = {};

export const socialLinks = {
	github: "https://github.com/HaochenGou",
	linkedin: "https://www.linkedin.com/in/haochen-gou-397823219/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	data: [
		{
			title: "Full Stack Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
				),
				emoji("⚡ Building responsive static websites using Next.js"),
				emoji(
					"⚡ Building RESTful APIs in Django & Django REST Framework"
				),
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
				{
					skillName: "Python",
					fontAwesomeClassname: "logos:python",
				},
				{
					skillName: "Django",
					fontAwesomeClassname: "vscode-icons:file-type-django",
				},

				{
					skillName: "Redux",
					fontAwesomeClassname: "logos:redux",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				},
			],
		},
		{
			title: "Cloud Infra-Architecture",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Experience of working on multiple cloud platforms"),
				emoji(
					"⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
				),
				emoji(
					"⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
				),
			],
			softwareSkills: [
				{
					skillName: "AWS",
					fontAwesomeClassname: "logos:aws",
				},
				{
					skillName: "Azure",
					fontAwesomeClassname: "logos:microsoft-azure",
				},
				{
					skillName: "Heroku",
					fontAwesomeClassname: "logos:heroku-icon",
				},
				{
					skillName: "PostgreSQL",
					fontAwesomeClassname: "logos:postgresql",
				},
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "Docker",
					fontAwesomeClassname: "logos:docker-icon",
				},
				{
					skillName: "Github Actions",
					fontAwesomeClassname: "logos:github-actions",
				},
				{
					skillName: "Cloudinary",
					fontAwesomeClassname: "logos:cloudinary",
				},
				{
					skillName: "Nginx",
					fontAwesomeClassname: "logos:nginx",
				},
				{
					skillName: "Sentry",
					fontAwesomeClassname: "logos:sentry-icon",
				},
			],
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "80", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "80",
	},
];

export const educationInfo = [
	{
		schoolName: "University of Alberta",
		subHeader: "Bachelor of Science with Specialization program, Computing Science",
		duration: "September 2017 - November 2021",
	},
];

export const experience = [
	{
		role: "Web Developer",
		company: "WillowStone Marketing",
		companylogo: "/img/icons/common/WillowStoneMarketing.jpg",
		date: "Jan 2021 – Jan 2022",
		desc: "Worked as a only developer in a Marketing company with the design team developed website and application for the client. Have developed excellent performance products to satisfy customers and help win contracts.",
	},
	{
		role: "Full Stack Developer",
		company: "Hawke Prohibition Distilleries",
		companylogo: "/img/icons/common/HawkeProhibitionDistilleries.jpg",
		date: "Jan 2022 - present",
		desc: "Work as the only programmer developed the e-commerce website based on React effectively Providing tech services on SEO, website building and hosting for clients.Satisfied customer-oriented development, work closely with business ensure to achieve clients’ requirements, effectively consult on solutions",
	},
];

export const projects = [
	{
		name: "Autoplex",
		desc: "A website for the cardealership Autoplex",
		link: "www.autoplexalberta.ca",
	},
	{
		name: "Hawke prohibition Distilleries Website",
		desc: "A website for the Hawke prohibition Distilleries ",
		link: "https://hawkeprohibition.com/",
	},
	{
		name: "",
		desc: "",
		link: "",
	},
	{
		name: "",
		desc: "",
		// github: "",
		link: "",
	},
	{
		name: "",
		desc: "",
		github: "",
		link: "",
	},
];

export const feedbacks = [
	{
		name: "",
		feedback:
			"",
	},
	{
		name: "",
		feedback:
			"",
	},
];
