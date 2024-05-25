const Person = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.occupation),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { class: "title" }, "React is renderer"),
    React.createElement(
      Person,
      { name: "John Doe", occupation: "Software Engineer" },
      null
    ),
    React.createElement(
      Person,
      { name: "Jane Doe", occupation: "Senior Software Engineer" },
      null
    ),
    React.createElement(
      Person,
      { name: "John Smith", occupation: "Teacher" },
      null
    ),
  ]);
};

// 
ReactDOM.render(React.createElement(App), document.getElementById("root"));

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
