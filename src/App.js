import React from 'react';
import './App.css';

function App() {

  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
      <Welcome name='Kiệt'/>
    </div>
  );
}

export default App;
