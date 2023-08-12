import {rarities} from '../pages/config.js';
import '../../styles/Item.css';

export default function Item({type, details, rarity=1, description={}, active, idx, onClick}){
    const imgURL = "https://raw.githubusercontent.com/SahilBamb/XeoReact/ImageStore/Item/" 
                    + type + "/" + details + ".png"
    
    const transformProp = active ? "scale(1.2)" : "scale(1.0)";
    const style = {
            borderColor : rarities[rarity].color, 
            transform : transformProp
        };
        
    return (
        <div style = {style} 
            class="card item item-card"
            onClick={() => {onClick(idx);}}>
            <img class="item" src={imgURL}></img>
            <div class="item card-text">
                <p className="maplestory-bold-center">
                    {details} {type}</p>
                {(rarity > 1) && 
                    <p className = "pixel-center"
                        style = {{color : rarities[rarity].color}}
                    >{rarities[rarity].name}</p>}
            </div>
        </div>
    )
}