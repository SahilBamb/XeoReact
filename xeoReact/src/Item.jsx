export default function Item({name, color, effect, onClick, className}) {
    return (
        <div onClick={onClick} className={className}>
            <p>Name: {name}</p>
            {color !== undefined && <p>Color: {color}</p> }
            {effect !== undefined && <p>Effect: {effect}</p> }
        </div>
    )
}