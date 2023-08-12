import Item from '../partials/Item';
import Pet from './Pet';
import "../../styles/profile.css";
import {useState} from 'react';

export default function Profile({items, setItems, pets, setPets, setPage}){

    const setStat = (name, value, color) => {
        return {
            "name": name, 
            "value": value, 
            "color": color
        }
    }

    const preStat = [
        setStat("STR", 1, "#F5E9B3"),
        setStat("DEX", 2, "#7CFFAF"),
        setStat("CONST", 3, "#71CFE8"),
        setStat("INTL", 4, "#8989FF"),
        setStat("WSDM", 5, "#DA9BE8"),
        setStat("CHAR", 6, "#FFBFBC")
    ];

    const [activeItem, setActiveItem] = useState(null);
    
    const itemSelect = (idx) => {
        setActiveItem((activeItem === idx) ? null : idx);
    }

    const removeItem = (idx) => {
        if (activeItem === null) return;
        idx = activeItem
        setItems([...items.slice(0, idx), ...items.slice(idx+1)]);
        setActiveItem(null);
    }

    const useItem = (petIdx) => {
        if (pets[petIdx].color == items[activeItem].details || 
            activeItem === null) return;
        pets[petIdx].color = items[activeItem].details;
        removeItem(activeItem);
    }

    return (
        <profile>
                <header>
                </header>
                <content className="profile">
                    <div className="pet-rack">
                    {pets.map((pet, i) => {
                            return <Pet
                                stats={preStat}
                                onClick={useItem} 
                                idx={i}
                                colorPaint={items[activeItem]?.details}
                                {...pet}/>
                        })}
                    {(pets.length < 1) && 
                        
                        <div className="noPets">
                            <div className="noPetsMainMessage">
                                <p>
                                    You Have No Pets 
                                    <i className="fa-solid fa-heart-crack"></i>
                                </p> 
                            </div>
                            <div 
                                onClick = {() => {setPage("Adopt");}}
                                className="adoptLink">Adopt a xeopet</div> 
                        </div>
                        
                            }
                            
                    </div>
                    
                    <div className="item-rack">
                        {items.map((item, i) => {
                            return <Item 
                                active={activeItem === i}
                                idx={i}
                                onClick={itemSelect} 
                                {...item}/>
                        })}
                    </div>
                </content>
                <footer>
                </footer>
        </profile>
    )

}