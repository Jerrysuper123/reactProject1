import React from 'react';
import './App.css';


import JokeLoad from './components/JokeLoad';


function App() {
  return (
    <div className="App">
      <div className="topnav">
      <a>Five jokes a day, keeping the doctor away - staying cool in pandemic</a>
      </div>
      <JokeLoad/>
    </div>
  );
}

export default App;
