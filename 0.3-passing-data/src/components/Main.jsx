import React from 'https://cdn.skypack.dev/react';

export default function Main(props) {
    return (
        <section>
            <h1>Welcome back, {props.userName}</h1>
        </section>
    );
}