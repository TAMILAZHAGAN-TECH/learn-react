import React from "react";
import styled from 'styled-components'

import clasess from "./App.module.css";
import Person from "./Person/Person";

class App extends React.Component {
  state = {
    persons: [
      { id: 1, name: "Name 1", age: 14 },
      { id: 2, name: "Name 2", age: 20 },
      { id: 3, name: "Name 3", age: 22 },
    ],
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { id: 1, name: "Name 1", age: 14 },
        { id: 2, name: newName, age: 20 },
        { id: 3, name: "Name 3", age: 24 },
      ],
      showPersons: false,
    });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      ...this.state,
      showPersons: !doesShow,
    });
  };

  deletePersonsHandler = (personIndex) => {
    let persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons,
    });
  };

  nameChangedHandler = (event, id) => {
    let personIndex = this.state.persons.findIndex((p) => p.id === id);

    let person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    let persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  render() {
    // const style = {
    //   backgroundColor: "green",
    //   color: "white",
    //   font: "inherit",
    //   border: "1px solid blue",
    //   padding: "8px",
    //   cursor: "pointer",
    // };
    const StyledButton = styled.button`
      background-color: ${props => props.showPersons ? 'red' : 'green'};
      color: white;
      font: inherit;
      padding: 8px;
      cursor: pointer;
      border: none;
      &:hover {
        background: ${props => props.showPersons ? 'salmon' : 'lightgreen'};
        color: black;
      }
    `;

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                key={person.id}
                click={() => this.deletePersonsHandler(index)}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      // style.backgroundColor = 'red';
    }
    const assingedClasess = [];
    if(this.state.persons.length <= 2) {
      assingedClasess.push("red");
    }
    if(this.state.persons.length <= 1) {
      assingedClasess.push("bold");
    }
    return (
      <div className={clasess.App}>
        <h1>Class Based Component</h1>
        {/* <StyledButton 
          showPersons={this.state.showPersons}
          onClick={() => this.togglePersonHandler()} >
          Toggle Persons
        </StyledButton> */}
        <button 
          onClick={() => this.togglePersonHandler()} 
          className={clasess.button} >
          Toggle Persons
        </button>
        <p className={assingedClasess.join(' ')}>This is dynamic props</p>
        {persons}
      </div>
    );
  }
}

export default App;
