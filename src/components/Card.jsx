import React from "react";

export default function Card({ artists, song} ){
    return(
        <a>
            <h3>{artists}</h3>
            <p>{song}</p>
        </a>
        
    );
}