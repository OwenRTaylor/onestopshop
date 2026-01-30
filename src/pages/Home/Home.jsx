import TopicCard from "../../components/Topic Card/TopicCard";

const topics = [
	{
		id: "mongoDB",
		topic: "MongoDB",
		description: "A NoSQL database",
		link: "https://www.mongodb.com",
		imageUrl: "images/mongo-temp.png",
	},
	{
		id: "docker",
		topic: "Docker",
		description: "A containerization platform",
		link: "https://www.docker.com",
		imageUrl: "images/docker-temp.png",
	},
	{
		id: "react",
		topic: "React",
		description: "A JavaScript library for building user interfaces",
		link: "/react",
		imageUrl: "images/react-temp.png",
	},
	{
		id: "sandpack",
		topic: "Sandpack",
		description: "An online code editor/previewer built for embedding",
		link: "/sandpack",
		imageUrl: "images/sandpack-temp.png",
	},
];

export default function Home() {
	return (
		<div>
			<h1>Welcome to the Home Page</h1>
			<p>This is the main landing page of the application.</p>
			<div className="topic-cards">
				<ul>
					{topics.map((topic) => (
						<li key={topic.id}>
							<TopicCard
								topic={topic.topic}
								description={topic.description}
								link={topic.link}
								imageUrl={topic.imageUrl}
							/>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
