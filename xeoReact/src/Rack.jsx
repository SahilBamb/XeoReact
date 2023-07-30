import {v4 as uuid} from "uuid";
import Item from './Item'
import ItemTooltip  from './ItemTooltip/index.jsx';


export default function Rack({storeItems, onClick}) {
    var imgURL = "https://raw.githubusercontent.com/SahilBamb/XeoReact/ImageStore/Item/";
    return (<>
    {storeItems.map((e) => 
        <div 
            onClick = {() => {onClick(e.id)}}
            key = {e.id}
            className="storeItem recent-link">
            <img className="store-image" src={imgURL+e.name+"/"+e.color+".png"}></img>
            <p>{e.color} {e.name}</p>
            <p>Price: ₡{e.price}</p>
        </div>
        )}
    </>)
}

const itemTooltipData = {
    modesty: "Modesty",
    rareItem: "(Rare Item)",
    text1: "+ 5107",
    adventureIncrease: "Adventure Increase",
    reqLev50: "REQ LEV : 50",
    reqStr000: "REQ STR : 000",
    reqInt000: "REQ STR : 000",
    reqLuk000: "REQ STR : 000",
    reqDex000: "REQ STR : 000",
    beginnerWarriorMag: "BEGINNER   WARRIOR   MAGICIAN   BOWMAN   THIEF   PIRATE",
    canBeEquippedByAdele: "Can be equipped by Adele",
    categoryBoosterPack: "CATEGORY : Booster Pack",
    attackSpeedFast: "ATTACK SPEED : FAST",
    weaponAttack70: "WEAPON ATTACK : +70",
    numberOfUpgradesAvailable7: "NUMBER OF UPGRADES AVAILABLE: +7",
    remainingRestorationCount0: "(Remaining Restoration Count: 0)",
    numberOfViciousHammerApplied0: "NUMBER OF VICIOUS’ HAMMER APPLIED : 0",
    price: "R",
    potential: "Potential",
    spanText1: "Potential talent is sealed.",
    spanText2: "(You can check by clicking on the item window’s",
    spanText3: "magnifying button.)",
  };