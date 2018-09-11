import React from "react";
import ReactDOM from "react-dom";
import Tasks from "./components/tasks";

import "./styles.css";

function App() {
  const someTasks = [
    {title: "Wash dishes", done: false},
    {title: "Read book", done: false},
    {title: "Get some sleep", done: true}
  ];
  return <Tasks tasks={someTasks}/>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
