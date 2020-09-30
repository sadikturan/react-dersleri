import React from 'react'
import Repo from './Repo'

const Repos = ({repos}) => {
    return repos.map(repo => <Repo repo={repo} key={repo.id}/>)
}

export default Repos
