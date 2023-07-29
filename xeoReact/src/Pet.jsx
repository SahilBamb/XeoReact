export default function Pet({onClick, species, color, stat, equip}) {
    return (
        <div className="pet" onClick={onClick}>
            <p>Species: {species}</p>
            <p>Color: {color}</p>
            <p>Stat: {stat}</p>
            <ul>
                {equip.map((e) => (
                    <li>{e.name} +{e.effect}</li>
                    ))}
            </ul>
        </div>
    )
}