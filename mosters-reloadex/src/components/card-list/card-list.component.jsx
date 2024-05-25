import "./card-list.styles.css";
import CardContainer from "../card-container/card-container.component";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <CardContainer key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
