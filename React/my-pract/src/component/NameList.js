import React from "react";
function NameList() {
  const names = ["bb", "cc", "dd"];
  const nameList = names.map((item) => <h2>{item}</h2>);
  const objs = [
    { id: 1, names: "fff" },
    { id: 2, name: "ggg" },
  ];
  return (
    <div>
      <p>{names[0]}</p>
      <div>
        {names.map((n) => (
          <h2>{n}</h2>
        ))}
      </div>
      <hr />
      <div>{nameList}</div>
      <div>
        {objs.map((obj) => (
          <h2>
            {obj.id} and {obj.name}
          </h2>
        ))}
      </div>
      <hr />
    </div>
  );
}
export default NameList;
