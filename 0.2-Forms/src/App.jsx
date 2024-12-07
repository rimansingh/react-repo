import React from 'https://cdn.skypack.dev/react';

export default function App() {

    function signup(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        console.log(formData.get("email"));
        console.log(formData.get("password"));
    }

    return (
        <section>
            <h1>Sign Up</h1>
            <form action={signup}>

                <label htmlFor="email">Email:</label>
                <input id="email" type="email" name="email" placeholder="Enter your email" />
                <br />
                <label htmlFor="password">Password:</label>
                <input id="password" type="password" name="password" placeholder="Enter your password" />
                <br />

                <button type="submit">Sign Up</button>

            </form>
        </section>
    );
}