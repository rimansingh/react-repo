import React from 'https://cdn.skypack.dev/react';

import Navbar from "./components/Navbar"
import Main from "./components/Main"
import data from "./data"

export default function App(){
    const itemElements = data.map(item => {
        return(
            <Main
                key={item.id}
                
                // img={item.img}
                // title={item.title}
                // country={item.country}
                // date={item.date}
                // google_maps_url={item.google_maps_url}
                // text={item.text}

                // instead of writing each one we can use object in the Main.jsx as {item} in each props
                // item={item}
                // or use the spread operator
                {...item} // spread operator to pass all the props
            />
        )
    })
    
    return(
        <>
            <Navbar/>
            <main className="main">
                {itemElements}
            </main>
        </>
    )
}