import React from 'https://cdn.skypack.dev/react';



export default function Main(props){
    console.log(props)
    return(
        <>
            <article className="card">
                
                <div className="card-image-container">
                    <img 
                    src={props.img.src}
                    alt={props.img.alt} 
                    className="card-image"/>
                </div>

                <div className="card-content">
                    <img src="../images/marker.png" alt="marker" className="marker"/>
                    <span className="country">{props.country}</span>
                    <a href={props.google_maps_url}>
                        View on Google Maps
                    </a>
                    <h2 className="card-title">{props.title}</h2>
                    <p className="card-date">{props.date}</p>
                    <p className="card-description">
                        {props.text}
                    </p>
                </div>

            </article>
        </>
    )
}