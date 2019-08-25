import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt me"),
  //   React.createElement(Pet, {
  //     name: "Luna",
  //     animal: "Dog",
  //     breed: "Havanese"
  //   }),
  //   React.createElement(Pet, {
  //     name: "Papper",
  //     animal: "Bird",
  //     breed: "Cockatail"
  //   }),
  //   React.createElement(Pet, {
  //     name: "Doink",
  //     animal: "Cat",
  //     breed: "Mixed"
  //   })
  // ]);
  return (
    <div>
      <h1>adopt-me</h1>
      <Pet name="luna" animal="Dog" breed="havanese" />
      <Pet name="papper" animal="Bird" breed="cocktail" />
      <Pet name="doink" animal="Cat" breed="mixed" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
