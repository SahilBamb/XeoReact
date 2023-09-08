import "../../../styles/dropdowns/Breadcrumbs.css"
import '@fortawesome/fontawesome-free/css/all.css'; // For Solid style icons
import {useState} from "react";

export default function Breadcrumbs({setPage, page, historyStack, setHistoryStack}){

    function goBack(){
        if (historyStack.length > 0){
            setPage(historyStack[historyStack.length - 1]);
            setHistoryStack(historyStack.slice(0, historyStack.length - 1));
        }
        else {
            console.log("No history to go back to!");
        }
    }
    
    return (
        <div className="Breadcrumbs">
            <i onClick= {() => {goBack()}} className="navButton backButton fa-solid fa-arrow-left"></i>
            <i className="navButton forwardButton fa-solid fa-arrow-right"></i>
        </div>
    );

}
