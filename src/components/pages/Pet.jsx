import {rarities} from './config.js';
import '../../styles/Pet.css';

export default function Pet({species, color, colorPaint, stats, description={}, idx, onClick}){
    const imgURL = "https://raw.githubusercontent.com/SahilBamb/XeoReact/ImageStore/Pet/" 
                    + species + "/" + color + ".png"
    const imgURLPreview = "https://raw.githubusercontent.com/SahilBamb/XeoReact/ImageStore/Pet/" 
                    + species + "/" + colorPaint + ".png"

    console.log(stats);
    return (
        <div className="pet-card"
            onClick={() => {onClick(idx)}}>
            {colorPaint && <img visibility="hidden" src={imgURLPreview} className="pet-preview"></img>}
            <img src={imgURL} className="pet shiny"></img>
            <div class="pet-card-text">
                <p className="maplestory-bold-center">{species} {color}</p>
            </div>
            <div className="pet-stat-box">
                {stats.map((stat, i) => {
                    return <div 
                            className="pet-stat"
                            style={{
                                backgroundColor: stat.color,
                            }}
                            >{stat.name} {stat.value}</div>
                })}
            </div>

        </div>
    )
}