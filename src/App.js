import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
// import Coba from "./Coba";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <h1>adopt-me</h1>
        <SearchParams />
        {/* <Coba /> */}
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
