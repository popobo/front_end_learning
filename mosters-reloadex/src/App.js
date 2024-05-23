import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
  console.log("render from App");

  const [searchString, setSearchString] = useState(""); // [value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [stringFiled, setStringField] = useState("");

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchString(searchFieldString);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setMonsters(users);
      });
  }, []);

  useEffect(() => {
    setFilteredMonsters(
      monsters.filter((monster) => {
        console.log("filtering");
        return monster.name.toLowerCase().includes(searchString);
      })
    );
  }, [monsters, searchString]);

  const onStringChange = (event) => {
    setStringField(event.target.value);
  };

  return (
    <div className="App">
      <h1 className="app-title">monster rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search monster"
        className="monster-search-box"
      />
      <SearchBox
        onChangeHandler={onStringChange}
        placeholder="set string"
        className="monster-search-box"
      />

      {/* whenever props changes, component rerender */}
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchString: "",
//     };
//   }
//   // Called after the component is mounted to the DOM
//   componentDidMount() {
//     console.log("componentDidMount");
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => {
//         this.setState(() => {
//           return {
//             monsters: users,
//           };
//         });
//       });
//   }

//   // this prevent the component from rebuilding function
//   onSearchChange = (event) => {
//     this.setState(() => {
//       return {
//         searchString: event.target.value.toLowerCase(),
//       };
//     });
//   };

//   render() {
//     const { monsters, searchString } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchString);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">monster rolodex</h1>
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeholder="search monster"
//           className="monster-search-box"
//         />
//         {/* whenever props changes, component rerender */}
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
