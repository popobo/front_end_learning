import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    console.log("constructor");
    super();
    this.state = {
      monsters: [],
      searchString: "",
    };
  }
  // Called after the component is mounted to the DOM
  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState(
          () => {
            return {
              monsters: users,
            };
          },
          () => {
            console.log(this.state);
          }
        );
      });
  }

  render() {
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchString);
    });

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={(event) => {
            this.setState(() => {
              return {
                searchString: event.target.value.toLowerCase(),
              };
            });
          }}
        />
        {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
