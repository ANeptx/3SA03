import React from 'react';
import './App.css';
import WordCard from './WordCard';
function App() {
  const word = "Hello";
  return (
    <div className="App">
    <header className="App-header">
    <h1>
       Chitsanupong Juntan 6135512056
    </h1>
      <div>
        {
          <WordCard value="hello"/>
        }
      </div>
    </header>
    </div>
  );
}
export default App;