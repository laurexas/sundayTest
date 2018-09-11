import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/card";

import "./styles.css";

const App = () => {
  return (
    <div>
      <Card />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
