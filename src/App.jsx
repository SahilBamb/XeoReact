import { useEffect, useState } from 'react'
import './styles/App.css'
import './styles/globals.css'
import Navbar from './components/partials/Navbar';
import Adopt from './components/pages/Adopt';
import Profile from './components/pages/Profile';
import Store from './components/pages/Store';
import Neomail from "./components/pages/Neomail";
import PageTitle from './components/partials/PageTitle';
import RandomEvent from './components/partials/RandomEvent';
import Explore from './components/pages/Explore';
import Xeoboard from './components/pages/Xeoboard';

import { Pando } from "./screens/Pando";
import { Nervish } from "./screens/Nervish";
import { Sharktooth } from "./screens/Sharktooth";
import { Birbeak } from "./screens/Birbeak";
import { Draco } from "./screens/Draco";
import { Turt } from "./screens/Turt";
import { Bumble } from "./screens/Bumble";

import { Inventory } from "./screens/Inventory";
import { OceanScenePage } from "./screens/OceanScenePage";
import { ProfilePage } from "./screens/ProfilePage";
import { AdoptStore } from "./screens/AdoptStore";
import { BubbleStore } from "./screens/BubbleStore";
import { BurgerStore } from "./screens/BurgerStore";
import { JobOfficeStore } from "./screens/JobOfficeStore";

function App() {
  const [page, setPage] = useState("Profile")
  const [items, setItems] = useState([]);
  const [pets, setPets] = useState([]);

  useEffect(() => {}, [page])

  const uPage = "xeopets." + page.toLowerCase();
  
  return (
    <main>
      <Navbar setPage={setPage}/>
      {/* <PageTitle title={uPage} subTitle={page} color={"lightblue"}/> */}
      {/* {(Math.floor(Math.random() * 100) > 90) && <RandomEvent/> } */}

      {page === "Pando" && <Pando setPage={setPage} setPets={setPets}/>}
      {page === "Nervish" && <Nervish setPage={setPage} setPets={setPets}/>}
      {page === "Razortooth" && <Sharktooth setPage={setPage} setPets={setPets}/>}
      {page === "Birbeak" && <Birbeak setPage={setPage} setPets={setPets}/>}
      {page === "Draco" && <Draco setPage={setPage} setPets={setPets}/>}
      {page === "Turt" && <Turt setPage={setPage} setPets={setPets}/>}
      {page === "Bumble" && <Bumble setPage={setPage} setPets={setPets}/>}

      {page === "Xeoboard" && <Xeoboard/>}
      {page === "Adopt" && <Adopt pets={pets} setPets = {setPets} setPage = {setPage}/>}
      {page === "Profile" && <Profile 
        items={items} 
        setItems={setItems}
        pets={pets}
        setPets={setPets}
        setPage={setPage}
        />}
      {page === "Store" && <Store
        items={items} 
        setItems={setItems}
      />}
      {page === "Xeomail" && <Neomail/>}
      {page === "Explore" && <Explore/>}
      
    </main>
  )}

export default App
