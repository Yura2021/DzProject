import React from "react";
import Message from "./component/Message";
import EventBind from "./component/EventBind";
import MyCalc from "./component/MyCalc";
import ParentComponent from "./component/ParentComponent";
import Comp01 from "./component/Comp01";
import NameList from "./component/NameList";
import "./App.css";
function App() {
  return (
    <div className="App">
      <h2>№1</h2>
      <Message />
      <hr />
      <h2>№2</h2>
      <EventBind />
      <hr />
      <h2>№3</h2>
      <MyCalc />
      <hr />
      <h2>№4</h2>
      <ParentComponent />
      <hr />
      <h2>№5</h2>
      <Comp01 />
      <hr />
      <h2>№6</h2>
      <NameList />
    </div>
  );
}

export default App;
