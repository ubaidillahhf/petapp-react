import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
// import Coba from "./Coba";

const App = () => {
  return (
    <div>
      <h1>adopt-me</h1>
      <SearchParams />
      {/* <Coba /> */}
    </div>
  );
};

render(<App />, document.getElementById("root"));
