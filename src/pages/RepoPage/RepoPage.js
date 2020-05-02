import React, { useState, useEffect } from 'react';
import RepoCard from '../../components/RepoCard/RepoCard';
import { Link } from 'react-router-dom';
import './RepoPage.scss';

const RepoPage = (props) => {
    const [usersRepos, setUsersRepos] = useState([]);
    useEffect(() => {
        setUsersRepos(props.location.customData);
    }, [])
    return (
        <div className="repoPageMainContainer">
            <h1>{!usersRepos ? 'No repositories' : "Repositories for selected user"}</h1>
            <div className="reposCardContainer">
                {usersRepos && usersRepos.map(repo => <RepoCard
                    repoDescription={repo.description}
                    dateCreated={repo.created_at}
                    forks={repo.forks_count}
                    link={repo.html_url}
                    key={repo.id}
                    licenceType={repo.license}
                    repoName={repo.name}
                    stargazers={repo.stargazers_count}
                    watchers={repo.watchers_count} />
                )
                }
            </div>
            <Link to="/search-github-users" className="back-button">Back to Search Page</Link>
        </div>
    )
}

export default RepoPage;