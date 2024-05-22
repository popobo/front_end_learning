import { Component } from "react";

class CardList extends Component {
  render() {
    // render twice
    console.log("render from CardList");
    const { monsters } = this.props;
    return (
      <div>
        {monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
              <p>{monster.email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
