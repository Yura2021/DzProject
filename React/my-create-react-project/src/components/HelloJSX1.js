import React from "react";

const name = "Иван-Царевич";
const user = {
  firstName: "Марья",
  lastName: "Моревна",
};

function HelloJSX1() {
  return (
    <div>
      <h1>Здравствуй, {name}!</h1>
      <h1>
        {user.firstName} + ' ' + {user.lastName}
      </h1>
    </div>
  );
}
export default HelloJSX1;
