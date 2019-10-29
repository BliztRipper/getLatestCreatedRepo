import React from 'react';
import Loading from '../static/loader.svg'

function Loader() {
  return(
    <div className="loader">
      <h1>Loading...</h1>
      <img src={Loading} width="100" alt="Loading"/>
    </div>
  )
}

export default Loader;
 