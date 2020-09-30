import React, { useEffect, useContext } from 'react'
import Loading from './Loading'
import Repos from './Repos'
import GithubContext from '../context/githubContext'

const UserDetails = ( { match } ) =>  {

    const { getUser,loading,user, repos, getUserRepos } = useContext(GithubContext)

    useEffect(()=> {
        getUser(match.params.login);
        getUserRepos(match.params.login);
    }, [])

    const {name,avatar_url,location,html_url,bio,blog,followers,following,public_repos} = user;

    if(loading) return <Loading />

    return (
        <div className="container my-3">
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                    <img src={avatar_url} className="card-img-top"/>
                    <div className="card-body">
                        <p className="card-text">{ name }</p>
                        <p><i className="fas fa-map-marker-alt"></i> {location}</p>
                        <p>
                            <a className="btn btn-block btn-primary btn-sm" href={html_url}>Github Profile</a>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="card">
                        <div className="card-body">
                            {
                                bio && 
                                    <>
                                        <h3>About</h3>
                                        <p>{bio}</p>
                                    </>
                            }
                            {
                                blog && 
                                    <>
                                        <h3>Blog</h3>
                                        <p>{blog}</p>
                                    </>
                            }
                            <div>
                                <span className="badge badge-primary m-1">Followers: {followers}</span>
                                <span className="badge badge-danger m-1">Following: {following}</span>
                                <span className="badge badge-success m-1">Repos: {public_repos}</span>
                            </div>
                        </div>
                        <ul className="list-group list-group-flush">
                            <Repos repos={repos} />
                        </ul> 
                    </div>
                </div>
            </div>
        </div>
    )
}


export default UserDetails
