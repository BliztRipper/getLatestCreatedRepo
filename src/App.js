import React, {Fragment} from 'react';
import './App.scss';
import GithubIcon from "./static/GitHub-Mark.png"
import Repositories from "./components/Repositories"
import {Helmet} from "react-helmet";

function App() {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Most Stared - Rock Star Repositories</title>
      </Helmet>
      <div className="App">
      <div className="navbar">
        <img className="icon" src={GithubIcon} alt="icon"/>
      </div>
      <h1 className="repo-title">Most Starred Github Repositories in Last 30 days</h1>
      <Repositories/>
    </div>
    </Fragment>
  );
}

export default App;
