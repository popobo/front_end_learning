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
              this.setState(
                () => {
                  return {
                    name: {
                      firstName: "AAA",
                      lastName: "BBB",
                    },
                  };
                },
                // only called after all the state changes are applied
                () => {
                  console.log(this.state);
                }
              );
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
