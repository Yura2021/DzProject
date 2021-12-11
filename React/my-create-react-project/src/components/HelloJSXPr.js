import React from "react";

const HelloJSXPr = (props) => {
  console.log(props);

  return (
    <div>
      <h1>
        hello JSX +{props.name} + {props.id} +{props.pr}
      </h1>
      <p>{props.children}</p>
    </div>
  );
};
export default HelloJSXPr;
