import React from 'https://cdn.skypack.dev/react';

export default function Main() {
    const [ingridients, setIngridients] = React.useState([]);

    const listItems = ingridients.map((ingridient) => (
        <li key={ingridient}>{ingridient}</li>
    ));

    // function addIngredient(formData) {
    //     // event.preventDefault();
    //     // const formData = new FormData(event.currentTarget);
    //     const newIngridient = formData.get("ingridient");
    //     setIngridients(prevIngridients => [...prevIngridients, newIngridient]);
        
    // }

    function addIngredient(event) {
        event.preventDefault(); // Prevent form submission and page reload
        const formData = new FormData(event.currentTarget);
        const newIngridient = formData.get("ingridient");
        if (newIngridient) {
            setIngridients((prevIngridients) => [...prevIngridients, newIngridient]);
            event.target.reset(); // Clear the input field after submission
        }
    }

    return (
        <main>
            <form onSubmit={addIngredient} className="search-form">
                <input 
                    type="text" 
                    placeholder="e.g. pasta"
                    aria-label="Add Ingredients"
                    name="ingridient"
                />
                <button type="submit">Add Ingredients</button>
            </form>
            <ul>
                {listItems}
            </ul>
        </main>
    );
}