import React from "react";
import Qna from "./Components/Qna/Qna.js";
import Search from "./Components/Search/Search.js";
import AButton from "./Components/Buttons/AButton.js";
import QButton from "./Components/Buttons/QButton.js";

function App() {
  return (
    <div className="app pr-16 pl-16">
      <div className="grid grid-cols-1 gap-4  w-3/5  mx-auto">
        <Search />
        <Qna />
      </div>
      <div
        className="grid gap-4  w-3/5 mt-4 mx-auto"
        style={{ display: "flex" }}
      >
        <AButton />
        <QButton />
      </div>

    </div>
  );
}

export default App;
