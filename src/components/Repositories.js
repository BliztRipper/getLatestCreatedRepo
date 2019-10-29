import React, { useState, Fragment, useEffect } from "react";
import { dateFormated } from "../utilities/dateFormated";
import RepoList from './RepoList'
import axios from 'axios';

function Repositories(){
  const [repos, setRepos] = useState()
  const [perPage, setPerPage] = useState(10)
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },[])
  
  useEffect(() => {
    if (isLoading){
      fetchMoreData()
    }
  }, [isLoading]);

  function handleScroll() {
    let scrollHeight = window.innerHeight + document.documentElement.scrollTop
    let offsetHeight = document.documentElement.offsetHeight
    if (scrollHeight == offsetHeight)
    setIsLoading(true);
  }

  function fetchMoreData() {
    setPerPage(perPage+10)
    fetchData(perPage)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }

  const fetchData = async (perPage) =>{
    const url = await `https://api.github.com/search/repositories?q=created:>${dateFormated()}&sort=stars&order=desc&per_page=${perPage}`
    const result = await axios(url);
    const reposList = await result.data.items.map(repo => ({
      name: repo.name,
      description: repo.description,
      stars: repo.stargazers_count,
      forks: repo.forks,
      language: repo.language,
      id: repo.id,
      avatar: repo.owner.avatar_url,
      owner: repo.owner.login,
      issues: repo.open_issues,
      url: repo.html_url,
      createdAt: repo.created_at
    }))
    setRepos(reposList)
    setIsLoading(false);
  }

  if(repos){
    return(
      <Fragment>
        {repos.map(repo => (
          <li key={repo.id}>
            <RepoList {...repo} />
          </li>
        ))}
        {isLoading && <h1>Loading...</h1>}
      </Fragment>
    )
  } else {
    return <h1>Loading</h1>
  }
}
export default Repositories
