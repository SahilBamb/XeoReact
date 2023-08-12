import {useState} from 'react';
import '../../styles/RandomEvent.css';

const imageURL = "https://media.discordapp.net/attachments/1109347070516662343/1138335542308765766/sahilbamb_RPG_maplestory_skill_icon_3d_art_Store_Logo_vector_gr_6d9451a8-b200-48e2-a0cc-6e0a77bc4f52.png";

export default function RandomEvent({message="A mysterious man gives you a ticket. Why not click here to play!"}){
    return (
    <div className="container-randomEvent">
        <div className="randomEvent">
            <div className="randomEvent-title">
                <p>Something has happend!</p>
            </div>
            <div className="randomEvent-content">
                <img src={imageURL} className="randomEvent-icon"></img>
                <div className="randomEvent-text">{message}</div>
            </div>
        </div>
    </div>
    );
}
