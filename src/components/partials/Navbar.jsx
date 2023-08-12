import ItemDropDown from "./dropdowns/ItemDropDown";
import PetDropDown from "./dropdowns/PetDropDown";
import MenuDropDown from "./dropdowns/MenuDropDown";
import PageTitle from '../../components/partials/PageTitle';


export default function Navbar({setPage}) {
    return (
        <>  
            {/* <ItemDropDown/>
            <PetDropDown/> */}
            <MenuDropDown setPage={setPage}/>
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