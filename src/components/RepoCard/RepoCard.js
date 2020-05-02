import React from 'react';
import './RepoCard.scss';

const RepoCard = (props) => {
    return (
        <div className="repoCard">
            <h3><strong>Repo Name: </strong>{props.repoName}</h3>
            <h5><strong>Description: </strong>{!props.repoDescription ? "No Descritpion" : props.repoDescription}</h5>
            <div className="bottomRowRepoCard">
                <p><strong>Stargazers: </strong>{props.stargazers}</p>
                <p><strong>Watchers: </strong>{props.watchers}</p>
                <p><strong>Forks: </strong>{props.forks}</p>
                <p><strong>Created at: </strong>{props.dateCreated.slice(0, 10)}</p>
                {/* <p><strong>Licence Type: </strong> {!props.licenceType ? "No Licence Type" : props.licenceType}</p> */}
            </div>
            <a className="repoButt" href={props.link} target="_blank" rel="noopener noreferrer">View repo</a>
        </div>
    )
}

export default RepoCard;