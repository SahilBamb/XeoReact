import {useState} from 'react';
import {rarities} from '../pages/config.js';
import "../../styles/ItemCase.css";
import itemDetails from '../pages/itemDetails.jsx';

export default function ItemCase({items, setItems, setPage, posStoreInventory, totalItems=12}) {
    
    const refreshInventory = () => { 
        if (loadingDots.visibility === "visible") return;
        setLoadingDots({visibility: "visible"});
        setTimeout(function() {
            let si = [...posStoreInventory.filter((e) => Math.random() < (1/(5**(e.rarity-1))))];
            while (si.length < totalItems){ si.push({}); }
            setsStoreInventory(si);
            setLoadingDots({visibility: "hidden"});
        }, 800);
    };
    
    let si = [...posStoreInventory.filter((e) => Math.random() < (1/(5**(e.rarity-1))) )];
    
    while (si.length < totalItems){ si.push({}); }

    const [storeInventory, setsStoreInventory] = useState(si);
    const [loadingDots, setLoadingDots] = useState({visibility: "hidden"});

  
    const addtoItems = (e, items, setItems) => {
        if (e.type !== undefined){
            var newItems = [...items];
            newItems.push(e);
            setItems(newItems);
            setsStoreInventory(storeInventory.map((item) => {
                return (
                    item.type === e.type && item.details === e.details ? {} : item
                )}));
        }
    }
    return (
        <content className="ep-container">
            <div className="ep-map">
                <div className="ep-item-case">
                    <div className={loadingDots.visibility==="hidden" ? "refresh-button" : "refresh-button spinning"} onClick={refreshInventory}>
                        <i class="fa fa-refresh refresh-text" aria-hidden="true"></i>
                    </div>
                    <div className="loading-dots"
                            style={loadingDots}>RESTOCKING</div>
                    <div className="loading-bar"></div>
                    <div className="loading-bar-loading"></div>
                    {[...storeInventory].map((e, i) => {
                        var finalImage = `https://raw.githubusercontent.com/SahilBamb/XeoReact/ImageStore/Item/${e.type}/${e.details}.png`;
                        var style = { 
                            backgroundImage: `url(${finalImage})`,
                            border: "1px solid black",
                            borderColor: e.rarity!==undefined ? rarities[e.rarity].color : "black",
                            };
                        return (
                            <div 
                                onClick={() => {addtoItems(e, items, setItems); }}
                                style={style}
                                className={"box"}>
                                    {(Object.keys(e).length !== 0) && 
                                        <div className="price-tag">$0</div>
                                    }
                            </div>
                                );
                    })};
                    
                </div>
            </div>
        </content>
    );
}