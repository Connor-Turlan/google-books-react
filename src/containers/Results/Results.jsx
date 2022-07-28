import style from "./Results.module.scss";
import Card from "../../components/Card";

const Results = (props) => {
	return (
		<div className={style.Results}>
			{props.cards.map((card, index) => (
				<Card key={index} content={card} />
			))}
		</div>
	);
};

export default Results;
