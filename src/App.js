import React from 'react';
import FirstComponent from './components/learning-examples/FirstComponent';
import SecondComponent from './components/learning-examples/SecondComponent'
import logo from './logo.svg';
import './App.css';
import Counter from './components/counter/Counter'

function App() {
  return (
    <div className="App">
      <Counter/>
      <Counter by={5}/>
      <Counter by={10}/>
    </div>
  );
}

// function comment
function LearningComponents() {
  return (
    <div>
      My React Hello World!
      <FirstComponent/>
      <SecondComponent/>
    </div>
  );
}

export default App;
