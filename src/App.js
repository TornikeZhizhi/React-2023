import { useEffect, useState } from "react";

import "./App.css";
import EatSplit from "./Components/Eat-Split/EatSplit";
import TodoListMain from "./Components/TodoList/TodoListMain";
import InverstmentMain from "./Components/Investment/InvestmentMain";

function App() {
  return (
    <div className="App">
      {/* <div className="sidebar_fluid">
        <EatSplit />
      </div> */}
      <InverstmentMain />
      {/* <TodoListMain /> */}
    </div>
  );
}

export default App;
