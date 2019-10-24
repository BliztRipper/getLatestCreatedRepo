import React, { useState, Fragment, useEffect } from "react";
import { dateFormated } from "../utilities/dateFormated";

function Repositories(){
  const [repos, setRepos] = useState()
  const [page, setPage] = useState('1')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const url = `https://api.github.com/search/repositories?q=created:>${dateFormated()}&sort=stars&order=desc&page=${page}`;
    console.log(url)
  })

  return(
    <Fragment>
    
    </Fragment>
  )
}

export default Repositories
