import React from "react";
import {useState} from "react";
import "./style.css";
import Stats from "./../partials/StatsScreen/Stats";

export const Sharktooth = ({pets, setPets, setPage}) => {

  const pet = {
        species : "Razortooth",
        color : "Vanilla",
        available : true
      };

  const [stats, setStats] = useState({
    fitness: 3,
    happiness: 3,
    goodness: 3,
    adventurousness: 3,
    socialness: 3,
  });

  return (
    <div className="sharktooth">
      <div className="overlap-wrapper-2">
        <div className="overlap-6">
          <img className="img" alt="Main rectangle card" src="/img/main-rectangle-card-shrk.png" />
          <div className="card-SHRK">
            <div className="buttons-SHRK">
              <div className="left-button-NVSH-2">
                <div 
                  onClick = {() => { 
                    setPets([...pets, {...pet}]); 
                    setPage("Profile");
                  }}
                  className="petPage-Adopt overlap-group-4">
                  <div className="text-wrapper-10">Adopt Pet</div>
                </div>
              </div>
              <div className="right-button-NVSH-2">
                <div className="overlap-7">
                  <div className="text-wrapper-11">View Variants</div>
                </div>
              </div>
            </div>
            <div className="overlap-8">
              <header className="header-2">
                <p className="text-wrapper-12">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                </p>
                <div className="main-heading-text-2">
                  Aquatic
                  <br />
                  RazorTooth
                </div>
              </header>
              <img className="line-2" alt="Line" src="/img/line.svg" />
            </div>
            <Stats buttonColor={"#f1cd60"} stats={stats} setStats={setStats}/>
          </div>
          <img className="sharktooth-img" alt="Sharktooth img" src="/img/sharktooth-img.png" />
        </div>
      </div>
    </div>
  );
};
