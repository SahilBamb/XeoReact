import {useState, useEffect} from 'react';
import {v4 as uuid} from "uuid";

import Money from './Money'
import StoreOwner from './StoreOwner'
import Rack from './Rack'
import Inventory from './Inventory'
import ItemTooltip  from './ItemTooltip/index.jsx';


export default function Store(){

    const [money, setMoney] = useState(100);
    const [storeItems, setStoreItems] = useState([
        {id: uuid(), name: "Paintbrush" , color: "Vanilla", price: 20},
        {id: uuid(), name: "Booster", color: "Snowflake", price: 10}]
    )

    const [items, setItems] = useState([]);

    function buyItem(id){
        storeItems.map((e) => {
            if (e.id === id) {
                if (e.price > money) {return;}
                else {
                    setMoney(money - e.price);
                    setItems([...items,{name:e.name, color:e.color}])
                    setStoreItems(storeItems.filter(se => se.id !== e.id))
                }
            }
        })

    }


    return (<>
        <Money money={money}/>
        <StoreOwner/>
        <Rack storeItems = {storeItems} onClick={buyItem}/> 
        <Inventory/>   
    </>)
}
