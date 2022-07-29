import style from "./Card.module.scss";

const Card = ({ content }) => {
	return (
		<div className={style.Card}>
			<img
				className={style.Card__img}
				src={content.imageLink || "./assets/unavailable.png"}
				alt={content.title}
			/>
			<h2 className={style.Card__title}>{content.title}</h2>
			<h3 className={style.Card__author}>{content.author}</h3>
			<p className={style.Card__desc}>{content.description}</p>
		</div>
	);
};

export default Card;
