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
  const [title, setTitle] = useState("monster rolodex");

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

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search monster"
        className="monster-search-box"
      />
      <br />
      <SearchBox
        onChangeHandler={onTitleChange}
        placeholder="search title"
        className="monster-search-box"
      />

      {/* whenever props changes, component rerender */}
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
