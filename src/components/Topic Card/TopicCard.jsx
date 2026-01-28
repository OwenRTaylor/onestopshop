export default function TopicCard({ topic, description, link, imageUrl }) {
	console.log(topic, description, link, imageUrl);
	return (
		<div className="TopicCard ">
			<h2>{topic}</h2>
			<p>{description}</p>
			<img src={imageUrl} alt={topic} />
			<a href={link}>Learn more</a>
		</div>
	);
}
