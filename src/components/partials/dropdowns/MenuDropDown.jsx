import "../../../styles/dropdowns/MenuDropDown.css"
import '@fortawesome/fontawesome-free/css/all.css'; // For Solid style icons
import {useState} from "react";

export default function MenuDropDown({setPage}){
    const [menuState, setMenuState] = useState("mdd shrink-position");

    const expandMenu = () => {
        console.log(menuState);
        if(menuState === "mdd shrink-position"){
            setMenuState("mdd expand-position");
        }
        else{
            setMenuState("mdd shrink-position");
        }
    }

    return (
        <>
            {/* <div class="mdd-horizontal"></div>
            <div className="mdd-divider"> </div> */}
            <div class={menuState} onClick={expandMenu}>
                <div className="expand-button">
                    <i className="fa-solid fa-plus"></i>
                </div>
                <div className="logo">
                    <p id="Title" class="menu-bar">xeopets</p>
                    <i id="Star" className="fa-solid fa-star"></i>
                    <i id="Star-2" className="fa-solid fa-star"></i>
                    <i id="Star-3" className="fa-solid fa-star"></i>
                </div>
                <div id="PetCentralText" onClick={() => {setPage("Adopt");}}  class="menu-bar">
                    <i className="icon fa-solid fa-egg"></i> 
                    <p className="create-a"> create a </p>
                    <p className="xeopet">xeopet</p>
                </div>
                <div id="oval"></div>

                <div id="PetCentralText" onClick={() => {setPage("XeoCentral");}} class="menu-bar">
                    <p className="pet">Pet <i class="icon fa-solid fa-house"></i></p>
                    <p className="central">Central</p>
                </div>

                <div id="oval2"></div>

                <div class="menu-bar" onClick={() => {setPage("Explore");}}>
                    <i className="icon fa-solid fa-earth-americas"> </i> explore</div>
                <div class="menu-bar">
                    <div className="icon fa-solid fa-cube" /> games
                </div>
                <div class="menu-bar" onClick={() => {setPage("Xeomail");}} >
                    <div className="icon fa-regular fa-envelope" /> xeomail</div>
                <div class="menu-bar" onClick={() => {setPage("Store");}} >
                    <div className="icon fa-solid fa-cart-shopping" /> shops</div>
                <div class="menu-bar" onClick={() => {setPage("Xeoboard");}} >
                    <div className="icon fa-solid fa-otter" /> boards</div>
                <div class="menu-bar">
                    <div className="icon fa-regular fa-newspaper" /> news</div>
                <div class="menu-bar">
                    <div className="icon fa-solid fa-stroopwafel" /> stuff</div>
                <div class="menu-bar" onClick={() => {setPage("Profile");}}>
                    <div className="icon fa-solid fa-clipboard-question" /> profile</div>
                <div class="login menu-bar">
                    login
                    <i class="icon fa-solid fa-caret-right"></i> 
                </div>
                <div class="logout menu-bar">
                    <i class="icon fa-solid fa-caret-left"></i>
                    logout
                </div>
            </div>
        </>
    );

}
