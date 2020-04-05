import React from "react";
import "./App.css";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";

class App extends React.Component {
  state = {
    name: "Test",
  };
  nameChangeHandler = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  removeChar = (index) => {
    const charArr = this.state.name.split('');
    charArr.splice(index, 1);
    this.setState({
      name: charArr.join('')
    })
  }

  render() {
    const charList = this.state.name.split('').map((ch, index) => {
      return <Char 
        char={ch} 
        key={index}
        click={() => this.removeChar(index)} />
    })
    return (
      <div className="App">
        <h1>Excrcise 2</h1>
        <input
          type="text"
          onChange={this.nameChangeHandler}
          value={this.state.name}
        />
        <Validation length={this.state.name.length} />
        <p>
          The input value: {this.state.name} and lenght:{" "}
          {this.state.name.length}
        </p>

        {charList}
      </div>
    );
  }
}

export default App;
