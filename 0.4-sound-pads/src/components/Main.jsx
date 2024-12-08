import React from 'https://cdn.skypack.dev/react';

import padData from '../pads';

export default function Main() {

    const [pads, setPads] = React.useState(padData);

    const handleClick = pads.map(pad => (
        <button 
            key={pad.id} className="pad" 
            style={{backgroundColor: pad.color}}>
        </button>
    ))

    return (
        <section>
            <div className="pad-container">
                {handleClick}
            </div>
        </section>
    );
}