import React from "react";
import {useState} from "react";
import "./style.css";
import Stats from "./../partials/StatsScreen/Stats";

export const Birbeak = ({pets, setPets, setPage}) => {

  const pet = {
    species : "Birbeak",
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
    <div className="birbeak">
      <div className="overlap-wrapper-5">
        <div className="overlap-15">
          <div className="card-BRBK">
            <div className="buttons-BRBK">
              <div className="left-button-BRBK">
                <div className="petPage-Adopt overlap-group-9">
                  <div 
                    onClick = {() => { 
                      setPets([...pets, {...pet}]); 
                      setPage("Profile");
                    }}
                    className="text-wrapper-32">Adopt Pet</div>
                </div>
              </div>
              <div className="right-button-BRBK">
                <div className="img-wrapper">
                  <img className="view-variants-2" alt="View variants" src="/img/view-variants.png" />
                </div>
              </div>
            </div>
            <div className="overlap-16">
              <header className="header-4">
                <p className="text-wrapper-33">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                </p>
                <div className="main-heading-text-4">
                  Fledged
                  <br />
                  Birbeak
                </div>
              </header>
              <img className="line-4" alt="Line" src="/img/line.svg" />
            </div>
            <Stats buttonColor={"#414a14"} stats={stats} setStats={setStats}/>
          </div>
          <img className="birbeak-img" alt="Birbeak img" src="/img/birbeak-img.png" />
        </div>
      </div>
    </div>
  );
};
