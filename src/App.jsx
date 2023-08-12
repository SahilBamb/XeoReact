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


function App() {
  const [page, setPage] = useState("Store")
  const [items, setItems] = useState([]);
  const [pets, setPets] = useState([]);

  useEffect(() => {}, [page])

  const uPage = "xeopets." + page.toLowerCase();
  
  return (
    <main>
      <Navbar setPage={setPage}/>
      <PageTitle title={uPage} subTitle={page} color={"lightblue"}/>
      {(Math.floor(Math.random() * 100) > 90) && <RandomEvent/> }
      
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
