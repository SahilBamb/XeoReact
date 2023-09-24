import React from "react";
import {useState} from "react";
import "./style.css";
import Stats from "./../partials/StatsScreen/Stats";
import AdoptButton from "./../partials/AdoptButton/AdoptButton";

export const Nervish = ({pets, setPets, setPage}) => {

  const pet = {
    species : "Nervish",
    color : "Vanilla",
    available : true
  };

  const [stats, setStats] = useState({
    fitness: 3,
    happiness: 3,
    goodness: 3,
    adventurousness: 3,
    socialness: 3,
    statsList: {}
  });

  function updatePets(pet) {
    pet.statsList = stats;
    setPets([...pets, {...pet}])
  }

  return (
    <div className="nervish">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img className="main-rectangle-card" alt="Main rectangle card" src="/img/main-rectangle-card-nvsh.png" />
          <div className="card-NVSH">
            <div className="buttons-NVSH">
              <div className="left-button-NVSH">
                <AdoptButton pet={pet} pets={pets} setPets={setPets} setPage={setPage} stats={stats}/>
                {/* <div 
                  onClick = {() => { 
                    updatePets(pet);
                    setPage("Profile");
                  }}
                  className="petPage-Adopt overlap-group-2">
                  <div className="text-wrapper-3">Adopt Pet</div>
                </div> */}
              </div>
              <div className="right-button-NVSH">
                <div className="overlap-2">
                  <div className="text-wrapper-4">View Variants</div>
                </div>
              </div>
            </div>
            <div className="overlap-3">
              <header className="header">
                <p className="p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem</p>
                <div className="main-heading-text">
                  Deepsea
                  <br />
                  Nervish
                </div>
              </header>
              <img className="line" alt="Line" src="/img/line.svg" />
            </div>
            <Stats buttonColor={"#c2aef8"} stats={stats} setStats={setStats}/>
          </div>
          <img className="nervish-img" alt="Nervish img" src="/img/nervish-img.png" />
        </div>
      </div>
    </div>
  );
};
