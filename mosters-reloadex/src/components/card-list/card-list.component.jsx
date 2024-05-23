import { Component } from "react";
import "./card-list.styles.css";
import CardContainer from "../card-container/card-container.component";

class CardList extends Component {
  render() {
    // render twice
    console.log("render from CardList");
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <CardContainer monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
