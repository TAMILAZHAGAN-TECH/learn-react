import React, { useState } from "react";
import "./App.css";
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
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { id: 1, name: "Name 1", age: 14 },
        { id: 2, name: event.target.value, age: 20 },
        { id: 3, name: "Name 3", age: 24 },
      ],
    });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>Class Based Component</h1>
        <button 
          onClick={() => this.switchNameHandler('Test')}
          style={style}>Switch Name</button>
        <h4>This is static props</h4>
        <Person name="Name 1" age="14" 
          changed={this.nameChangedHandler}
          value={this.state.persons[1].name} />
        <Person name="Name 2" age="20" click={this.switchNameHandler.bind(this, 'Name Test')}>
          This is a children
        </Person>
        <Person name="Name 3" age="22" />
        <hr />
        <h4>This is dynamic props</h4>
        {this.state.persons.map((person) => {
          return <Person name={person.name} age={person.age} key={person.id} />;
        })}
      </div>
    );
  }
}

// const App = () => {
//   const [personState, setPersonState] = useState({
//     persons: [
//       { id: 1, name: "Name 1", age: 14 },
//       { id: 2, name: "Name 2", age: 20 },
//       { id: 3, name: "Name 3", age: 22 },
//     ],
//   })
//   const switchNameHandler = () => {
//       console.log("Was clicked!");
//       setPersonState({
//         persons: [
//           { id: 1, name: "Name 1", age: 14 },
//           { id: 2, name: "Name-2", age: 20 },
//           { id: 3, name: "Name 3", age: 24 },
//         ],
//       });
//     };
//   return (
//     <div className="App">
//       <h1>Functional Component</h1>
//       <button onClick={switchNameHandler}>Switch Name</button>
//         <h4>This is static props</h4>
//         <Person name="Name 1" age="14" />
//         <Person name="Name 2" age="20">
//           This is a children
//         </Person>
//         <hr />
//         <Person name="Name 3" age="22" />
//         <h4>This is dynamic props</h4>
//         {personState.persons.map((person) => {
//           return <Person 
//                     name={person.name} 
//                     age={person.age} 
//                     key={person.id} />;
//         })}
//     </div>
//   );
// }

export default App;
