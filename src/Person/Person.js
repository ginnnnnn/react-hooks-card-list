import React from "react";
import classes from "./Person.css";

const person = props => {
  return (
    <div className={classes.Person}>
      <h1 onClick={props.click}>{props.name}</h1>
      <p>my age is :{props.age}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
