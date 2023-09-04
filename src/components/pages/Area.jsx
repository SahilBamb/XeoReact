import "../../styles/Area.css";
import {rarities} from '../pages/config.js';
import {useState} from 'react';
export default function Area({page, setPage}){
    
    return (
        <div className={page}>
            <div className="sign LeftsideMansion">
                <div className="signText LeftsideMansionText">Leftside Mansion</div>
            </div>

            <div 
                onClick = {() => setPage("InconvStore")}
                className="sign InconvienceStore">
                <div className="signText">Inconvenience Store</div>
            </div>
            
            <div className="sign MiddleHouse">
                <div className="signText">Middle House</div>
            </div>

            <div className="sign RightSideManor">
                <div className="signText">Rightside Manor</div>
            </div>

            <div className="storeSideBar">
            </div>
        </div>
    );

}