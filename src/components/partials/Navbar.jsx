import ItemDropDown from "./dropdowns/ItemDropDown";
import PetDropDown from "./dropdowns/PetDropDown";
import MenuDropDown from "./dropdowns/MenuDropDown";
import Breadcrumbs from './dropdowns/Breadcrumbs';

import PageTitle from '../../components/partials/PageTitle';


export default function Navbar({setPage, page, historyStack, setHistoryStack}) {
    return (
        <>  
            {/* <ItemDropDown/>
            <PetDropDown/> */}
            <MenuDropDown setPage={setPage} setHistoryStack={setHistoryStack}/>
            <Breadcrumbs setPage={setPage} page={page} setHistoryStack={setHistoryStack} historyStack={historyStack} />
            {/* <nav>
                <ul>
                    <li onClick={() => {setPage("Profile")}}>
                        Profile
                    </li>
                    <li onClick={() => {setPage("Adopt")}}>
                        Adopt
                    </li>
                    <li onClick={() => {setPage("Store")}}>
                        Store
                    </li>
                </ul>
            </nav> */}
        </>
    )
}