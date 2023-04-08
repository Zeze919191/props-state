import React from "react";

function Person(props) {
  const { name, age } = props;

  return (
    <div>
      <p className="person">
        Name: {name} {"---"} Age: {age}
      </p>
    </div>
  );
}

export default Person;
