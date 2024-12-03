import React from 'https://cdn.skypack.dev/react';

export default function Main() {
    return (
        <main>
            <form action="" className="search-form">
                <input 
                    type="text" 
                    placeholder="e.g. pasta"
                    aria-label="Add Ingridients"
                />
                <button type="submit">Add Ingridients</button>
            </form>
        </main>
    );
}