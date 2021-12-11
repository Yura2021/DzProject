import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HelloW from "./components/HelloW";
import Welcome01 from "./components/Welcome01";
import HelloJSX1 from "./components/HelloJSX1";
import HelloJSX2 from "./components/HelloJSX2";
import HelloJSX3 from "./components/HelloJSX3";
import HelloClPr from "./components/HelloClPr";
import Welcome02 from "./components/Welcome02";
import HelloJSXPr from "./components/HelloJSXPr";
function App() {
  return (
    <div className="App">
      <hr />
      <h1>№1</h1>
      <h2>Create Project</h2>
      <hr />
      <h1>№2</h1>
      <HelloW />
      <hr />
      <h1>№3</h1>
      <Welcome01 />
      <hr />
      <h1>№4</h1>
      <Welcome02 />
      <Welcome02 name="Basilio" ggg="GG&" />
      <Welcome02 name="Basilio" />
      <hr />
      <h1>№5</h1>
      <HelloJSX1 />
      <HelloJSX2 />
      <HelloJSX3 />
      <hr />
      <h1>№6</h1>
      <HelloClPr fName="User1" lName="User2" />
      <hr />
      <h1>№7</h1>
      <HelloJSXPr
        name="Test name"
        id="Test id"
        pr="Test pr"
        children="Test children"
      />
    </div>
  );
}

export default App;
