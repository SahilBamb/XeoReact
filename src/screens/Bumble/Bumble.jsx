import React from "react";
import {useState} from "react";
import "./style.css";
import Stats from "./../partials/StatsScreen/Stats";

export const Bumble = ({pets, setPets, setPage}) => {

  const pet = {species : "Bumble",
                color : "Vanilla",
                available : true};

  const [stats, setStats] = useState({
      fitness: 3,
      happiness: 3,
      goodness: 3,
      adventurousness: 3,
      socialness: 3,
    });

  return (
    <div className="bumble">
      <div className="overlap-wrapper-8">
        <div className="overlap-32">
          <div className="card-TRTL-2">
            <div className="buttons-TRTL-2">
              <div 
                onClick = {() => { 
                  setPets([...pets, {...pet}]); 
                  setPage("Profile");
                }}
                className="petPage-Adopt overlap-33">
                <div className="text-wrapper-57">Adopt Pet</div>
              </div>
              <div className="overlap-group-16">
                <img className="view-variants-5" alt="View variants" src="/img/view-variants.png" />
              </div>
            </div>
            <div className="overlap-34">
              <header className="header-7">
                <p className="text-wrapper-58">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                </p>
                <div className="main-heading-text-7">
                  Buzzing
                  <br />
                  Bumble
                </div>
              </header>
              <img className="line-7" alt="Line" src="/img/line.svg" />
            </div>
            <Stats buttonColor="Black" stats={stats} setStats={setStats} />
          </div>
          <img className="turt-img-2" alt="Turt img" src="/img/turt-img-1.png" />
        </div>
      </div>
    </div>
  );
};
