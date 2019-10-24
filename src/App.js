import React from 'react';
import './App.scss';
import GithubIcon from "./static/GitHub-Mark.png"
import Repositories from "./components/Repositories"

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <img className="icon" src={GithubIcon} alt="icon"/>
      </div>
      <Repositories/>
    </div>
  );
}

export default App;
