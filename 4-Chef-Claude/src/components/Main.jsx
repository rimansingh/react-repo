import React from 'https://cdn.skypack.dev/react';

export default function Main() {
    const [ingridients, setIngridients] = React.useState([
        "pasta",
        "tomato sauce",
        "mozzarella",
        "pepperoni",
        "mushrooms",
        "olives"
    ]);

    const [recipe, setRecipe] = React.useState(false);

    function recipeShown() {
        setRecipe(!recipe);
    }

    const listItems = ingridients.map((ingridient) => (
        <li key={ingridient}>{ingridient}</li>
    ));

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

            {ingridients.length > 0 && <section>

                <h2>Ingredients on hand:</h2>
                <ul className="ingridients-list" aria-live="polite">
                    {listItems}
                </ul>
                {ingridients.length > 3 && <div className="get-recipe-container">
                    <div>
                        <h3>Get a recipe?</h3>
                        <p>Generate a random recipe with these ingridients.</p>
                    </div>
                    <button onClick={recipeShown}>Get a recipe</button>
                </div>}    
                
            </section>}

            {recipe && <section>
    <h2>Recommendations:</h2>
    <article className="recommendation">
        <h1>Spaghetti Aglio e Olio</h1>
        <p><strong>Spaghetti Aglio e Olio</strong> is a simple and delicious Italian pasta recipe made with minimal ingredients. Perfect for a quick and satisfying meal!</p>
        <h3>Ingredients</h3>
        <ul>
            <li>200g spaghetti</li>
            <li>4 cloves garlic (thinly sliced)</li>
            <li>5 tbsp olive oil</li>
            <li>1/2 tsp red chili flakes</li>
            <li>Fresh parsley (chopped, for garnish)</li>
            <li>Salt (to taste)</li>
            <li>Grated Parmesan cheese (optional)</li>
        </ul>
        <h3>Equipment</h3>
        <ul>
            <li>Large pot</li>
            <li>Strainer</li>
            <li>Frying pan</li>
            <li>Wooden spoon</li>
        </ul>
        <h3>Instructions</h3>
        <ol>
            <li>Bring a large pot of salted water to a boil. Add the spaghetti and cook according to the package instructions until al dente.</li>
            <li>While the pasta cooks, heat olive oil in a frying pan over medium heat.</li>
            <li>Add the sliced garlic to the oil and sauté until it turns golden brown. Be careful not to burn it.</li>
            <li>Stir in the red chili flakes and remove the pan from the heat.</li>
            <li>Drain the cooked spaghetti, reserving 1/4 cup of pasta water.</li>
            <li>Add the spaghetti to the frying pan with the garlic and chili flakes. Toss well to coat the pasta in the oil.</li>
            <li>If needed, add a bit of reserved pasta water to loosen the sauce.</li>
            <li>Season with salt to taste and toss again.</li>
            <li>Garnish with fresh parsley and grated Parmesan cheese, if desired.</li>
        </ol>
        <h3>Serving Suggestions</h3>
        <p>This dish pairs wonderfully with a side salad or crusty garlic bread. Enjoy with a glass of white wine for an authentic Italian experience.</p>
        <strong>Tip:</strong> Adjust the amount of chili flakes to suit your spice tolerance.
    </article>
</section>}

        </main>
    );
}