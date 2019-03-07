import React from "react";
import "./Person.css";

const person = props => {
  return (
    <div className="Person">
      <h1 onClick={props.click}>{props.name}</h1>
      <p>my age is :{props.age}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
