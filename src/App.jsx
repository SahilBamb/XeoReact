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
import { Tigre } from "./screens/Tigre";

import { Inventory } from "./screens/Inventory";
import { OceanScenePage } from "./screens/OceanScenePage";
import { ProfilePage } from "./screens/ProfilePage";
import { AdoptStore } from "./screens/AdoptStore";
import { BubbleStore } from "./screens/BubbleStore";
import { BurgerStore } from "./screens/BurgerStore";
import { JobOfficeStore } from "./screens/JobOfficeStore";
import { SpacePlace } from "./screens/SpacePlace/Index";
import { FighterGambling } from "./screens/FighterGambling";
import { Grid } from "./screens/Grid";
import { Stuff } from "./screens/Stuff";
import { DevBlog } from "./screens/DevBlog";


function App() {
  const [page, setPage] = useState("DevBlog")
  const [items, setItems] = useState([]);
  const [pets, setPets] = useState([]);
  const [menuState, setMenuState] = useState("mdd expand-position");
  const [historyStack, setHistoryStack] = useState([]);


  useEffect(() => {}, [page])

  const uPage = "xeopets." + page.toLowerCase();
  
  return (
    <main>
      <Navbar setPage={setPage} page={page} historyStack={historyStack} setHistoryStack={setHistoryStack} menuState={menuState} setMenuState={setMenuState}/>
      {/* <PageTitle title={uPage} subTitle={page} color={"lightblue"}/> */}
      {/* {(Math.floor(Math.random() * 100) > 90) && <RandomEvent/> } */}

      {page === "DevBlog" && <DevBlog/>}

      {page === "Grid" && <Grid setPage={setPage} items={items} setItems={setItems}/>}
{/* 
      {page === "FighterGambling" && <FighterGambling setPage={setPage} items={items} setItems={setItems}/>} */}


      {page === "BurgerStore" && <BurgerStore setPage={setPage} items={items} setItems={setItems}/>}
      {page === "BubbleStore" && <BubbleStore setPage={setPage} items={items} setItems={setItems}/>}
      {page === "JobOfficeStore" && <JobOfficeStore setPage={setPage} items={items} setItems={setItems}/>}

      {page === "OceanScene" && <OceanScenePage page={page} setPage={setPage} items={items} setItems={setItems}/>}
      
      {page === "Pando" && <Pando pets={pets} setPets={setPets} setPage={setPage}/>}
      {page === "Nervish" && <Nervish pets={pets} setPets={setPets} setPage={setPage}/>}
      {page === "Razortooth" && <Sharktooth pets={pets} setPets={setPets} setPage={setPage} />}
      {page === "Birbeak" && <Birbeak pets={pets} setPets={setPets} setPage={setPage}/>}
      {page === "Draco" && <Draco pets={pets} setPets={setPets} setPage={setPage}/>}
      {page === "Turt" && <Turt pets={pets} setPets={setPets} setPage={setPage}/>}
      {page === "Bumble" && <Bumble pets={pets} setPets={setPets} setPage={setPage}/>}
      {page === "Tigre" && <Tigre pets={pets} setPets={setPets} setPage={setPage}/>}
      
      {page === "Xeoboard" && <Xeoboard/>} 
      {page === "Adopt" && <AdoptStore pets={pets} setPets = {setPets} setPage = {setPage}/>}
      {/* {page === "Adopt" && <Adopt pets={pets} setPets = {setPets} setPage = {setPage}/>} */}
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
      {page === "SpacePlace" && <SpacePlace page={page} setPage={setPage}/>}
      
    </main>
  )}

export default App
