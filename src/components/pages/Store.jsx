import "../../styles/Store.css";
import ItemCase from "./ItemCase";
import {rarities} from '../pages/config.js';
import {useState} from 'react';

export default function Store({items, setItems, setPage}){
    const posStoreInventory = 
        [{type : "Paintbrush",
        details : "Vanilla",
        description : {"Cost" : 100, 
                    "Description" : "A magical potion that makes you basic."},
        rarity : 1},
        {type : "Paintbrush",
        details : "Mushroom",
        description : {"Cost" : 9999, 
                    "Description" : "A magical potion gives your pet a penchant for shrooms."},
        rarity : 5,}];
    
    return (
        <store>
            <header>
            </header>
            <ItemCase 
                items = {items}
                setItems = {setItems}
                setPage = {setPage}
                posStoreInventory = {posStoreInventory}
                />
            <footer>
            </footer>
        </store>
    )
}