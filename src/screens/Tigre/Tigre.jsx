import React from "react";
import {useState} from "react";
import "./style.css";
import Stats from "./../partials/StatsScreen/Stats";
import AdoptButton from "./../partials/AdoptButton/AdoptButton";

export const Tigre = ({pets, setPets, setPage}) => {

  const pet = {
    species : "Tigre",
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
    <div className="tigre">
      <div className="overlap-group-wrapper">
        <div className="overlap-3">
          <img className="main-rectangle-card" alt="Main rectangle card" src="/img/main-rectangle-card-tgre.png" />
          <div className="card-TGRE">
            <div className="buttons-TRTL">
              {/* <div className="div-wrapper">
                <div className="text-wrapper-5">Adopt Pet</div>
              </div> */}
              <AdoptButton pet={pet} pets={pets} setPets={setPets} setPage={setPage} stats={stats}/>
              <div className="view-variants-wrapper">
                <img className="view-variants" alt="View variants" src="/img/view-variants.png" />
              </div>
            </div>
            <div className="overlap-4">
              <header className="header">
                <p className="p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem</p>
                <div className="main-heading-text">
                  Tawny
                  <br />
                  Tigre
                </div>
              </header>
              <img className="line" alt="Line" src="/img/line.svg" />
            </div>
            <Stats buttonColor={"rgb(245, 177, 100)"} stats={stats} setStats={setStats}/>
          </div>
          <img className="tigre-img" alt="Tigre img" src="/img/tigre-img.png" />
        </div>
      </div>
    </div>
  );
};
