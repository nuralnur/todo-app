import React from 'react';
/*import FirstComponent from './components/learning-examples/FirstComponent';
import SecondComponent from './components/learning-examples/SecondComponent'
import logo from './logo.svg';*/
import './App.css';
import Counter from './components/counter/Counter'

function App() {
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

// used class level component
/*function LearningComponents() {
  return (
    <div>
      My React Hello World!
      <FirstComponent/>
      <SecondComponent/>
    </div>
  );
}*/

export default App;
