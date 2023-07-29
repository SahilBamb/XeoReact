import {useState, useEffect} from 'react'
import Pokemon from './Pokemon'
import axios from 'axios'

export default function PokemonBattle(id) {

    const [opposingHP,setOpposingHP] = useState(100);
    const [pokeIds, setPokeIds] = useState([Math.floor(Math.random()*600), Math.floor(Math.random()*600)])


    function attack(dmg) {
        setOpposingHP(Math.max(0,opposingHP - dmg));
        console.log(opposingHP)
    }

    function getImg(id=0,back=false){
        const imgUrl = 
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
        const midUrl = back ? "/back/" : ""
        return imgUrl + midUrl + id + ".png";
    }

    useEffect(() => {
        if (id!==0) {
            axios.get("https://pokeapi.co/api/v2/pokemon/" + id)
                .then(response => {
                setPokemon((pokemon) => 
                    { return {...pokemon, 
                        species: response.data.name,
                    }; })
            })
        }

      }, []);

    return (
        <div>
            <Pokemon id={pokeIds[0]} 
                     back={false}
                     HP={opposingHP}
                     img={getImg(pokeIds[0])}/>
            <Pokemon id={pokeIds[1]} 
                     back={true}
                     HP={100}
                     img={getImg(pokeIds[1])}/>
        </div>
    )
}