import {useState} from 'react';
import {getDesertShopKeeper} from './Convo.js';


export default function StoreOwner() {

    const [dialouge, setDialouge] = useState(getDesertShopKeeper())

    return (<>
        <div className="storeKeeperCard">
            <img
            className="storeKeeperImage"
            src="https://media.discordapp.net/attachments/1109347070516662343/1119651782050709524/sahilbamb_RPG_maplestory_skill_icon_3d_art_Store_Logo_vector_gr_56195e57-3f1c-4fd1-857a-9aaac6a1bffa.png"></img>
            <div onClick={() => setDialouge(getDesertShopKeeper())}className="dialog">
                <p className="text">
                    {dialouge}
                </p>
            </div>
        </div>
    </>)
}



