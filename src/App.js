import React from 'react';
import './App.css';

class WelcomeWithClass extends React.Component {
  render() {
      return (
          <div>
              <h1>Hello, {this.props.name}</h1>
          </div>
      );
  }
}

function App() {

  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
      <Welcome name='Functional Component'/>
      <WelcomeWithClass name='Class Components'/>
    </div>
  );
}

export default App;
