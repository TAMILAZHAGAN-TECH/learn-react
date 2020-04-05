import React from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends React.Component {
  state = {
    userName : "Test Name"
  }

  changeHandler = (event) => {
    console.log('event', event.target)
    this.setState({
      userName: event.target.value
    })
  }

  render() {
    return (
    <div className="App">
      <h1>Excrcise 1</h1>
      <UserInput 
        changed={this.changeHandler}
        value={this.state.userName} />
      <UserOutput userName={this.state.userName} />
      <UserOutput userName={this.state.userName} />
      <UserOutput userName={this.state.userName} />
    </div>
  )
}
}

export default App;
