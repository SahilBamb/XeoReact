import {v4 as uuid} from "uuid";

export default function Pet({onClick, species, color, stat, equip}) {
    
    var imgURL = "https://raw.githubusercontent.com/SahilBamb/XeoReact/ImageStore/Pet/" + species + "/" + color + ".png"

    return (
        <div className="pet" onClick={onClick}>
            <img className="petProfile" src={imgURL}></img>
            <p>Species: {species}</p>
            <p>Color: {color}</p>
            <p>Stat: {stat}</p>
            <ul>
                {equip.map((e) => (
                    <li
                    key={uuid()}
                    >{e.name} +{e.effect}</li>
                    ))}
            </ul>
        </div>
    )
}