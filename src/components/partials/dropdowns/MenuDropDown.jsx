import "../../../styles/dropdowns/MenuDropDown.css"
import '@fortawesome/fontawesome-free/css/all.css'; // For Solid style icons
import {useState} from "react";

export default function MenuDropDown({setPage, setHistoryStack, historyStack}){
    const [menuState, setMenuState] = useState("mdd shrink-position");

    const expandMenu = () => {
        if(menuState === "mdd shrink-position"){
            setMenuState("mdd expand-position");
        }
        else{
            setMenuState("mdd shrink-position");
        }
    }

    function changePage(page){
        if ((historyStack===undefined) || (historyStack[historyStack.length - 1] != page)) {
            setHistoryStack(historyStack => [...historyStack, page]);
        }
        setPage(page);
    }

    return (
        <>
            {/* <div className="mdd-horizontal"></div>
            {menuState=="mdd expand-position" && <div className="mdd-divider"> </div>} */}
            <div className={menuState}>
                <div className="ddexpand-button" onClick={expandMenu}>
                    <i className="fa-solid fa-plus"></i>
                </div>
                <div className="logo">
                    <p id="Title" className="menu-bar">xeopets</p>
                    <i id="Star" className="fa-solid fa-star"></i>
                    <i id="Star-2" className="fa-solid fa-star"></i>
                    <i id="Star-3" className="fa-solid fa-star"></i>
                </div>
                <div id="PetCentralText" onClick={() => {changePage("Adopt");}}  className="menu-bar">
                    <i className="icon fa-solid fa-egg"></i> 
                    <p className="create-a"> create a </p>
                    <p className="xeopet">xeopet</p>
                </div>
                <div id="oval"></div>

                <div id="PetCentralText" onClick={() => {changePage("XeoCentral");}} className="menu-bar">
                    <p className="inactive-menu pet">Pet <i className="icon fa-solid fa-house"></i></p>
                    <p className="inactive-menu central">Central</p>
                </div>

                <div id="oval2"></div>

                <div className="menu-bar" onClick={() => {changePage("OceanScene");}}>
                    <i className="icon fa-solid fa-earth-americas"> </i> explore</div>
                
                <div className="inactive-menu menu-bar">
                    <div className="icon fa-solid fa-cube" /> games
                </div>
                
                <div className="menu-bar" onClick={() => {changePage("Xeomail");}} >
                    <div className="icon fa-regular fa-envelope" /> xeomail</div>
                
                <div className="menu-bar" onClick={() => {changePage("BurgerStore");}} >
                    <div className="icon fa-solid fa-cart-shopping" /> shops</div>
                
                <div className="inactive-menu menu-bar" onClick={() => {changePage("Xeoboard");}} >
                    <div className="icon fa-solid fa-otter" /> boards</div>
                
                <div className="inactive-menu menu-bar">
                    <div className="icon fa-regular fa-newspaper" /> news</div>
                
                <div className="menu-bar" onClick={() => {changePage("Stuff");}}>
                    <div className="icon fa-solid fa-stroopwafel" /> stuff</div>
                    
                <div className="menu-bar" onClick={() => {changePage("Profile");}}>
                    <div className="icon fa-solid fa-clipboard-question" /> profile</div>
                {/* <div className="login menu-bar">
                    login
                    <i className="icon fa-solid fa-caret-right"></i> 
                </div>
                <div className="logout menu-bar">
                    <i className="icon fa-solid fa-caret-left"></i>
                    logout
                </div> */}
            </div>
        </>
    );

}
