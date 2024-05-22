import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
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
        this.setState(() => {
          return {
            monsters: users,
          };
        });
      });
  }

  // this prevent the component from rebuilding function
  onSearchChange = (event) => {
    this.setState(() => {
      return {
        searchString: event.target.value.toLowerCase(),
      };
    });
  };

  render() {
    const { monsters, searchString } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchString);
    });

    return (
      <div className="App">
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="search monster"
          className="monster-search-box"
        />
        {/* whenever props changes, component rerender */}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
