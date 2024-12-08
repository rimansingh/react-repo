import React from 'https://cdn.skypack.dev/react';

export default function Header(props) {

    return (
        <header>
            <nav>
                <p>{props.userName}</p>
            </nav>
        </header>
    );
}