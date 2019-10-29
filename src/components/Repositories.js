import React, { useState, Fragment, useEffect } from "react";
import { dateFormated } from "../utilities/dateFormated";
import RepoList from './RepoList'
import axios from 'axios';
import Loader from './Loader'

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
      const fetchMoreData = async() =>{
        setPerPage(p => p+10)
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
          ownerProfile: repo.owner.html_url,
          url: repo.html_url,
          createdAt: repo.created_at
        }))
        setRepos(reposList)
        setIsLoading(false);
        console.log(result.data.items);
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      }
      fetchMoreData()
    }
  }, [isLoading]);

  function handleScroll() {
    // Get scroll event
    let scrollHeight = window.innerHeight + document.documentElement.scrollTop

    //Get overall height
    let offsetHeight = document.documentElement.offsetHeight

    //Trigger fetch data when scroll to the bottom
    if (scrollHeight === offsetHeight){
      setIsLoading(true);
    }
  }

  if(repos){
    return(
      <Fragment>
        {repos.map(repo => (
          <li key={repo.id}>
            <RepoList {...repo} />
          </li>
        ))}
        {isLoading && <Loader/>}
      </Fragment>
    )
  } else {
    return <Loader/>
  }
}
export default Repositories
