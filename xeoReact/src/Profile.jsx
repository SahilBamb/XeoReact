import {useState, useEffect} from "react"
import {v4 as uuid} from "uuid";

import Pet from './Pet'
import Item from './Item'

export default function Profile() {

    const [pets, setPets] = useState(
        [{id: uuid(), species:"Draco", color: "Vanilla", stat: 1, equip:[{name: "totem", effect: 1}]},
        {id: uuid(), species:"Birbeak", color: "Vanilla", stat: 1, equip:[]},
        {id: uuid(), species:"Nervish", color: "Vanilla", stat: 1, equip:[]}]
    );

    const [items, setItems] = useState(
        [{id: uuid(), name:"Paintbrush", color: "Zombie"},
        {id: uuid(), name:"Paintbrush", color: "Angel"},
        {id: uuid(), name:"Paintbrush", color: "Labrat"},
        {id: uuid(), name:"Equip", effect: 2}]
    );

    const [pet, setPet] = useState(
        {species:"Draco",
         color: "Vanilla"}
         );

    const [activeItem, setActiveItem] = useState(null)

    function useItemOnPet(id){
        console.log("clicking on pet")
        if (activeItem === null) 
            {console.log("No Item");}
        else if (activeItem.item === "Paintbrush") {
            setPets(
                pets.map((e) => {
                    if (e.id === id) {
                        return {...e, color: activeItem.color}
                    }
                else {
                    return e;
                }
                }))

            const itemID = activeItem.id;
            setActiveItem(null)
            setItems(items.filter(e => e.id !== itemID))
        }
        else if (activeItem.item === "Equip") {
            console.log("Equipped Item")
            setPets(
                pets.map((e) => {
                    if (e.id === id) {
                        return {...e, equip: [...e.equip, {name: activeItem.item, effect: activeItem.effect}]}
                    }
                else {
                    return e;
                }
                }))

            const itemID = activeItem.id;
            setActiveItem(null)
            setItems(items.filter(e => e.id !== itemID))

        }
        else if (activeItem.item === "Boost") {
            console.log("Added Boost")
        }
    }

    function pickupItem(id, item, color, effect){
        console.log("Picked up Item " )
        if (item === "Paintbrush") {
            setActiveItem({id:id, item:item, color:color})
        }
        else if (item === "Equip") {
            setActiveItem({id:id, item:item, effect:effect})
        }
        else if (item === "Upgrade") {

        }
        else if (item === "Booster") {

        }
    }

    return (
        <>
        <h1>Pets</h1>
            {pets.map((e) => (
                <Pet
                    key = {e.id}
                    onClick = {() => useItemOnPet(e.id)}
                    species={e.species}
                    color={e.color}
                    stat={e.stat}
                    equip={e.equip}
                />
            ))}
            
        <h1>Inventory</h1>
            {items.map((e) => (
                <Item
                    className = {(activeItem !== null && e.id === activeItem.id) ? "item activeItem" : "item"}
                    key = {e.id}
                    onClick = {() => pickupItem(e.id,e.name,e.color,e.effect)}
                    name={e.name}
                    color={e.color}
                    effect={e.effect}
                />
            ))}
        </>
    )
}