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

  let people = null;
  if (showPeople === true) {
    people = peopleState.map((person, index) => {
      return (
        <Person
          click={() => deletePersonHandler(index)}
          name={person.name}
          age={person.age}
          changed={event => onNameChangeHandler(event, index)}
          key={person.id}
        />
      );
    });
  }

  return (
    <div className="App">
      <h1>Hello I'm react app!!!</h1>
      <button onClick={togglePeopleHandler}>Toggle People cards</button>
      {people}
    </div>
  );
};

export default app;
