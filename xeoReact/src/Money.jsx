export default function Money({money}) {
    return (<>
        <div 
            className="moneyHeader">
            <p
            className="moneyText"
            >Money: ${money}</p>
        </div>
    </>)
}