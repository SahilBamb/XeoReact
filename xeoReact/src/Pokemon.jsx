import {useState, useEffect} from "react";

export default function Pokemon({id=0, 
                                 HP=100, 
                                 img="",
                                 name=""}) {

    return (
        <div 
        style={{
            borderStyle: "solid",
            width: "100px",
            height: "170px",
            margin: "100px"
        }}>
            <p>{pokemon.species}</p>
            <p>{pokemon.HP}</p>
            <img src={pokemon.img}></img>
            
        </div>
    )
}