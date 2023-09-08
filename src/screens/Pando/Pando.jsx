import React from "react";
import {useState} from "react";
import "./style.css";
import Stats from "./../partials/StatsScreen/Stats";

export const Pando = ({pets, setPets, setPage}) => {


  const [variantsMiniScreen, setVariantsMiniScreen] = useState(false);

  function showVariants() {
    setVariantsMiniScreen(variantsMiniScreen => !variantsMiniScreen);
  }

  const baseURL = 'https://raw.githubusercontent.com/SahilBamb/XeoReact/ImageStore/Pet/Pando/';

  const variants = ["Vanilla", "Mushroom"];

  const imageType = '.png';

  const pet = {
    species : "Pando",
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
    <div className="pando">
      <div className="overlap-wrapper-4">
        <div className="overlap-12">
          <div className="card-PNDO">
            <div className="buttons-PNDO">
              <div className="left-button-PNDO">
                <div 
                  onClick = {() => { 
                    // setPets([...pets, {...pet}]); 
                    // setPage("Profile");
                  }}
                  className="petPage-Adopt overlap-group-7">
                  <div className="text-wrapper-25">Adopt Pet</div>
                </div>
              </div>
              <div
                className = "variants-mini-screen"
                style = {{visibility: variantsMiniScreen ? "visible" : "hidden"}}
                > 
                {variants.map((variant) => (
                  <img 
                    key={variant}
                    className="variantImage"
                    src = {baseURL + variant + imageType}
                    alt = {variant}
                    ></img>
                ))}
        
               {/* <div className="variantImage"></div>
               <div className="variantImage"></div>
               <div className="variantImage"></div> */}
              </div>
              <div className="right-button-PNDO" onClick={() => showVariants()}>
                <div className="view-variants-wrapper">
                  <img className="view-variants" alt="View variants" src="/img/view-variants.png" />
                </div>
              </div>
            </div>
            <div className="overlap-13">
              <header className="header-3">
                <p className="text-wrapper-26">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                </p>
                <div className="main-heading-text-3">
                  Newfound
                  <br />
                  Pando
                </div>
              </header>
              <img className="line-3" alt="Line" src="/img/line.svg" />
            </div>
            <Stats buttonColor={"#4e5e66"} stats={stats} setStats={setStats}/>
          </div>

          <img className="pando-img" alt="Pando img" src="/img/pando-img.png" />
        </div>
      </div>
    </div>
  );
};
