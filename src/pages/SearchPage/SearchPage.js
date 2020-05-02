import React, { useState, useEffect } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import UserCard from '../../components/UserCard/UserCard';
import ErrorModal from '../../components/ErrorModal/ErrorModal';
import { useHistory } from 'react-router-dom';

import './SearchPage.scss';

const SearchPage = () => {
    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [avatar, setAvatar] = useState('');
    const [userRepoLink, setUserRepoLink] = useState('');
    const [userRepos, setUserRepos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    useEffect(() => {

    }, [])

    const getUsersFromApi = (e) => {
        e.preventDefault();
        fetch(`https://api.github.com/users/${inputValue}`)
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                } else if (res.status === 404) {
                    setError("User Not Found! Please try with some other name!")
                } else {
                    setError("Something went wrong! Please try again!")
                }
            })
            .then(data => {
                setData(data);
            })
            .catch((err) => console.log(err));
        resetUserRepos();
    }

    const resetUserRepos = () => {
        setUserRepos([]);
    }

    useEffect(() => {
    }, [userRepos, userRepoLink])

    const setData = ({ name, bio, avatar_url, login, repos_url }) => {
        setName(name);
        setUserName(login);
        setUserDescription(bio);
        setAvatar(avatar_url);
        setUserRepoLink(repos_url)
    }

    const repoHandler = () => {
        fetch(`${userRepoLink}`)
            .then(res => res.json())
            .then(data => {
                setUserRepos(data);
                history.push({
                    pathname: '/search-github-users/repositories',
                    customData: data
                });
            })
            .catch((err) => (console.log(err.message)))
    }

    const cleanError = () => {
        setError(null);
        cleanInputs();
    }

    const cleanInputs = () => {
        setInputValue("");
    }

    return (
        <div>
            {error && <ErrorModal onClose={cleanError} messageErr={error} />}
            <SearchForm
                inputValue={inputValue}
                submitForm={getUsersFromApi}
                changedValue={e => setInputValue(e.target.value)}
                disabledButton={inputValue.length === 0 ? true : false} />
            <UserCard
                avatar={avatar}
                name={name}
                description={userDescription}
                getRepo={repoHandler}
                loginData={userName} />
        </div>
    )
};

export default SearchPage;