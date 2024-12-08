import React from 'https://cdn.skypack.dev/react';

export default function App() {

    function signup(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        // console.log(formData.get("email"));
        // console.log(formData.get("password"));
        // console.log(formData.get("description"));
        // console.log(formData.get("employment"));
        // console.log(formData.getAll("skills"));
        // console.log(formData.get("favColor"));

        const data = Object.fromEntries(formData)
        const skills = formData.getAll("skills");
        data.skills = skills;
        console.log(data)
        
    }

    return (
        <section>
            <h1>Sign Up</h1>
            <form onSubmit={signup}>

                <label htmlFor="email">Email:</label>
                <input id="email" type="email" name="email" placeholder="Enter your email" defaultValue="4xGQK@example.com"/>
                <br />
                <label htmlFor="password">Password:</label>
                <input id="password" type="password" name="password" placeholder="Enter your password" defaultValue="password123"/>
                <br />

                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description" cols="30" rows="5" defaultValue="I am a software developer"></textarea>
                <br />

                <fieldset>
                    <legend>Employment Status:</legend>
                    <label htmlFor="employed">
                        <input 
                            id="employed" 
                            type="radio" 
                            name="employment" 
                            value="employed" 
                        />
                        Employed
                    </label>

                    <label htmlFor="unemployed">
                        <input 
                            id="unemployed" 
                            type="radio" 
                            name="employment" 
                            value="unemployed" 
                        />
                        Unemployed
                    </label>

                    <label htmlFor="student">
                        <input 
                            id="student" 
                            type="radio" 
                            name="employment" 
                            value="student" 
                        />
                        Student
                    </label>
                </fieldset>

                <fieldset>
                    <legend>Skills:</legend>
                    <label htmlFor="html">
                        <input 
                            id="html" 
                            type="checkbox" 
                            name="skills" 
                            value="html" 
                        />
                        HTML
                    </label>

                    <label htmlFor="css">
                        <input 
                            id="css" 
                            type="checkbox" 
                            name="skills" 
                            value="css" 
                        />
                        CSS
                    </label>
                </fieldset>

                <label htmlFor="favColor">Favorite Color:</label>
                <select id="favColor" name="favColor" defaultValue="blue" required>
                    <option value="" disabled>Select a color</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                </select>

                <button type="submit">Sign Up</button>

            </form>
        </section>
    );
}