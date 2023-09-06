import React from "react";
import {useState} from "react";
import "./style.css";
import Stats from "./../partials/StatsScreen/Stats";


export const Turt = ({pets, setPets, setPage}) => {

  const pet = {
    species : "Turt",
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
    <div className="turt">
      <div className="overlap-wrapper-7">
        <div className="overlap-24">
          <img className="main-rectangle-card-3" alt="Main rectangle card" src="/img/main-rectangle-card-trtl.png" />
          <div className="card-TRTL">
            <div className="buttons-TRTL">
              <div 
                onClick = {() => { 
                  setPets([...pets, {...pet}]); 
                  setPage("Profile");
                }}
                className="overlap-group-14">
                <div className="text-wrapper-46">Adopt Pet</div>
              </div>
              <div className="overlap-25">
                <img className="view-variants-4" alt="View variants" src="/img/view-variants.png" />
              </div>
            </div>
            <div className="overlap-26">
              <header className="header-6">
                <p className="text-wrapper-47">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                </p>
                <div className="main-heading-text-6">SeaboundTurt</div>
              </header>
              <img className="line-6" alt="Line" src="/img/line.svg" />
            </div>
            <Stats buttonColor={"#20b7ae"} stats={stats} setStats={setStats}/>
          </div>
          <img className="turt-img" alt="Turt img" src="/img/turt-img.png" />
        </div>
      </div>
    </div>
  );
};
