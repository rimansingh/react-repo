import React from 'https://cdn.skypack.dev/react';

import profile from '../img/profile.png'
import starFilled from '../img/starFilled.png'
import starEmpty from '../img/starEmpty.png'

export default function Main() {
    const [isStarred, setIsStarred] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "123-456-789",
        email: "john.doe@example.com",
        isTrue: false
    })

    let starIcon = isStarred.isTrue ? starFilled : starEmpty

    function handleClick() {
        setIsStarred(prevIsStarred => ({
            ...prevIsStarred,
            isTrue: !prevIsStarred.isTrue
        }))
    }

    return (
        <main>
            <article className="card">
                <img 
                    src={profile}
                    className="profile-icon" 
                    alt="profile icon" />
                
                <div className="info">
                    <button 
                        className="star-button" 
                        onClick={handleClick}
                        aria-pressed={isStarred.isTrue}
                        aria-label={isStarred.isTrue ? "Remove from favorites" : "Add to favorites"}>
                        <img 
                            src={starIcon}
                            alt={isStarred.isTrue ? "Starred" : "Not starred"} 
                            className="star-icon"/>
                    </button>
                    <h1>{isStarred.firstName} {isStarred.lastName}</h1>
                    <p>phone: {isStarred.phone}</p>
                    <p>email: {isStarred.email}</p>
                </div>
            </article>
        </main>
    );


}