import React from "react";
import Message from "./component/Message";
import EventBind from "./component/EventBind";
import MyCalc from "./component/MyCalc";
import ParentComponent from './component/ParentComponent'
import Comp01 from './component/Comp01'
import "./App.css";
function App() {
  return (
    <div className="App">
    <Message />
      <hr />
      <EventBind />
      <hr />
      <MyCalc />
      <hr /> 
      <ParentComponent/>
      <hr/>
<Comp01/>
    </div>
  );
}

export default App;
