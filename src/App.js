import React, { useState } from "react";
import "./App.css";

import Person from "./Person/Person";

const app = () => {
  const [peopleState, setPeopleState] = useState([
    { name: "Austin", age: 18, id: "aq1" },
    { name: "Misa", age: 38, id: "aq2" },
    { name: "Goo", age: 11, id: "aq3" },
    { name: "Luisa", age: 22, id: "aq4" }
  ]); //Hooks array destructure [1,2] 1=>state ,2=>function for changing state

  const [showPeople, setShowPeople] = useState(false);

  const togglePeopleHandler = () => {
    setShowPeople(!showPeople);
  }; //toggle

  const deletePersonHandler = index => {
    const updateArray = [...peopleState];
    console.log(index);
    updateArray.splice(index, 1); // splice(index,counts) this will change the array
    setPeopleState(updateArray);
  };

  const onNameChangeHandler = (event, index) => {
    let newArray = [...peopleState];
    newArray[index].name = event.target.value;
    setPeopleState(newArray);
  };

  const style = {
    background: "green",
    border: "1px solid blue",
    color: "white",
    padding: "8px",
    cursor: "pointer"
  };

  let people = null;

  if (showPeople === true) {
    people = peopleState.map((person, index) => {
      return (
        <Person
          click={deletePersonHandler.bind(this, index)}
          name={person.name}
          age={person.age}
          changed={event => onNameChangeHandler(event, index)}
          key={person.id}
        />
      );
    });

    style.background = "red";
  }

  let classes = [];
  if (peopleState.length <= 2) {
    classes.push("red");
  }
  if (peopleState.length <= 1) {
    classes.push("bold");
  } //modify the className by using array,then assign .join(' ')

  return (
    <div className="App">
      <h1>Hello I'm react app!!!</h1>
      <p className={classes.join(" ")}>
        this color change by the card's number
      </p>
      <button style={style} onClick={togglePeopleHandler}>
        Toggle People cards
      </button>
      {people}
    </div>
  );
};

export default app;
