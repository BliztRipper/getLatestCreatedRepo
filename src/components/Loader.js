import React, { Fragment } from 'react';
import loading from '../loader.svg'

function Loader() {
  return(
    <div className="loader">
      <h1>Loading...</h1>
      <img src={loading} width="100"/>
    </div>
  )
}

export default Loader;
