import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: {
        firstName: "John",
        lastName: "Doe",
      },
      company: "AAA",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi, {this.state.name.firstName} {this.state.name.lastName}, I work
            in {this.state.company}
          </p>
          <button
            onClick={() => {
              //asynchronous
              this.setState({
                name: {
                  firstName: "aaa",
                  lastName: "bbb",
                },
              });
              console.log(this.state);
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
