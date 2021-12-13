import React from "react";
function ChildComponent(props) {
  return (
    <div>
      <button onClick={props.childMethod}>To {props.id}</button>
      <button onClick={() => props.childMethod2("child")}>Back</button>
    </div>
  );
}
export default ChildComponent;
