import React from "react";
import {useState} from "react";
import Stats from "../partials/StatsScreen/Stats";
import "./style.css";
import AdoptButton from "./../partials/AdoptButton/AdoptButton";

export const Draco = ({pets, setPets, setPage}) => {

  const pet = {
    species : "Draco",
    color : "Vanilla",
    available : true,
    statsList : {}
  };

  const [stats, setStats] = useState({
    fitness: 3,
    happiness: 3,
    goodness: 3,
    adventurousness: 3,
    socialness: 3,
  });


  return (
    <div className="draco">
      <div className="overlap-wrapper-6">
        <div className="overlap-19">
          <img className="main-rectangle-card-2" alt="Main rectangle card" src="/img/main-rectangle-card-drk.png" />
          <div className="card-DRK">
            <div className="buttons-DRK">
              {/* <div 
                onClick = {() => { 
                  updatePets(pet);
                  setPage("Profile");
                }}
                className="left-button-DRK">
                <div className="petPage-Adopt overlap-group-11">
                  <div className="text-wrapper-39">Adopt Pet</div>
                </div>
              </div> */}
              <AdoptButton pet={pet} pets={pets} setPets={setPets} setPage={setPage} stats={stats}/>
              <div className="right-button-DRK">
                <div className="overlap-20">
                  <img className="view-variants-3" alt="View variants" src="/img/view-variants.png" />
                </div>
              </div>
            </div>
            <div className="overlap-21">
              <header className="header-5">
                <p className="text-wrapper-40">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                </p>
                <div className="main-heading-text-5">
                  Majestic
                  <br />
                  Draco
                </div>
              </header>
              <img className="line-5" alt="Line" src="/img/line.svg" />
            </div>
            <Stats buttonColor="#FFC700" stats={stats} setStats={setStats}/>
          </div>
          <img className="draco-img" alt="Draco img" src="/img/draco-img.png" />
        </div>
      </div>
    </div>
  );
};
