import React from 'https://cdn.skypack.dev/react';

/* export default function App() {

//     const [count, setCount] = React.useState(0)

//     function add(){
//         setCount(prevCount => prevCount + 1)
//     }

//     function minus(){
//         setCount(prevCount => prevCount - 1)
//     }
//     return (
//         <div className="app-container">
//             <button className="button" onClick={minus}>-</button>
//             <h3 className="heading">{count}</h3>
//             <button className="button" onClick={add}>+</button>
//         </div>
//     );
// }

// export default function App() {
    
//     const [isClicked, setIsClicked] = React.useState(false);

//     function handleClick() {
//         setIsClicked(prevIsClicked => !prevIsClicked);
//     }
    
//     return (
//         <main>
//             <h1 className="heading">Fun facts about React</h1>
//             <button 
//                 className="button" 
//                 onClick={handleClick}
//                 aria-label={isClicked ? "Hide" : "Show"}>
//                     {isClicked ? "Hide" : "Show"}
//             </button>
//         </main>
//     );
// }
*/




// Complex state: Array
export default function App() {

    const allThings = ["1", "2", "3", "4", "5"];

    const [myThings, setMyThings] = React.useState([]);
    
    const thingElement = myThings.map((thing) => (
        <li key={thing}>{thing}</li>
    ));

    function addThing() {
        // const newThing = Math.floor(Math.random() * allThings.length);
        setMyThings(prevMyThings => [...prevMyThings, allThings[prevMyThings.length]]);
    }

    return (
        <main>
            <button onClick={addThing}>Add Item</button>
            <section aria-live="polite">
                <ul>
                    {thingElement}
                </ul>
            </section>
        </main>
    );
}