export default function Item({name, color, effect, onClick, className, sleeve}) {
    
    let details;
    if (name==="Paintbrush") details = color;
    else if (name==="Booster") details = sleeve;
    else if (name==="Equip") details = "";
    const imgURL = "https://raw.githubusercontent.com/SahilBamb/XeoReact/ImageStore/Item/" + name + "/"+ details +".png"
    
    return (
        <div onClick={onClick} className={className}>
            <img className="itemProfile" src={imgURL} alt={name}></img>
            <p>Name: {name}</p>
            {color !== undefined && <p>Color: {color}</p> }
            {effect !== undefined && <p>Effect: {effect}</p> }
        </div>
    )
}