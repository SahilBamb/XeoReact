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
        [{id: uuid(), name:"Booster"},
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
            var itemUsed = false;
            setPets(
                pets.map((e) => {
                    if (e.id === id) {
                        console.log("Species " + e.species + " Color of item " + activeItem.color);
                        if (e.color === activeItem.color) {return e;}
                        else {itemUsed = true;}
                        return {...e, color: activeItem.color}
                    }
                else {
                    return e;
                }
                }))

            if (itemUsed) {
                setActiveItem(null)
                setItems(items.filter(e => e.id !== activeItem.id))
            }
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
            
                setActiveItem(null)
                setItems(items.filter(e => e.id !== activeItem.id))

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
            console.log("Opened Booster Pack");
            let newItems = items.filter(e => e.id !== id);
            newItems = [...newItems, 
                {id: uuid(), name:"Paintbrush", color: "Mushroom"},
                {id: uuid(), name:"Paintbrush", color: "Vanilla"}]
            setItems(newItems)
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