import React from 'react';
import './UserCard.scss';

const UserCard = (props) => {
    return (
        <div>
            {props.loginData.length === 0 ? "" : <h1>Card for matched user</h1>}
            {props.loginData.length === 0 ? <h1>List is empty, please type characters in the form and press Submit!</h1> :
                <button onClick={props.getRepo} type="submit" className="userCardLink">
                    <div>
                        <img src={props.avatar} alt={props.name} />
                        <h1>{!props.name ? "User did not defind a name" : props.name}</h1>
                        <p>{!props.description ? "User has no descritpion!" : props.description.slice(0, 90) + '...'}</p>
                    </div>
                </button>
            }
        </div>
    )
};

export default UserCard;