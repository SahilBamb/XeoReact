import React from "react";
import "./style.css";

export const SpacePlace = ({page, setPage}) => {
  return (
    <div className="SpacePlace">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img
            onClick = {() => setPage("BubbleStore")}
            className="removal storeIcons"
            alt="Removal"
            src="https://cdn.animaapp.com/projects/64c6fa72dcbdbd5700002966/releases/64fa837645d7dfa9d8ca45f7/img/removal-384-1.png"
          />
          <div className="bottom-text">
            <div className="text-wrapper">BBL</div>
            <div className="overlap-group">
              <p className="serens-poementos">
                Serens poementos berees seemental ase he <br />
                sementalboyaond aeo es ambeiental estwelem
                <br />
                alisteema aeo meenulasteo opmeo seeemeao
                <br />
                holmeonse eo sassebeo weemeanu an.as
                <br />
                alisteema aeo meenulasteo opmeo seeemeao
                <br />
                holmeonse eo sassebeo weemeanu an.sas
              </p>
              <div className="div">The Bubble</div>
            </div>
          </div>
          <img
            onClick = {() => setPage("BurgerStore")}
            className="img storeIcons"
            alt="Removal"
            src="https://cdn.animaapp.com/projects/64c6fa72dcbdbd5700002966/releases/64fa837645d7dfa9d8ca45f7/img/-removal-4.png"
          />
          <div className="bottom-text-2">
            <div className="text-wrapper-2">BRGR</div>
            <div className="overlap-group">
              <p className="serens-poementos">
                Serens poementos berees seemental ase he <br />
                sementalboyaond aeo es ambeiental estwelem
                <br />
                alisteema aeo meenulasteo opmeo seeemeao
                <br />
                holmeonse eo sassebeo weemeanu an.as
                <br />
                alisteema aeo meenulasteo opmeo seeemeao
                <br />
                holmeonse eo sassebeo weemeanu an.sas
              </p>
              <div className="div">Burger. Stop</div>
            </div>
          </div>
          
          <img
            onClick = {() => setPage("JobOfficeStore")}
            className="LawOffice storeIcons"
            alt="LawOffice"
            src="./img/LawOffice.png"
          />
          <div className="bottom-text-3">
            <div className="text-wrapper-3">JSTCE</div>
            <div className="overlap-group">
              <p className="serens-poementos">
                Serens poementos berees seemental ase he <br />
                sementalboyaond aeo es ambeiental estwelem
                <br />
                alisteema aeo meenulasteo opmeo seeemeao
                <br />
                holmeonse eo sassebeo weemeanu an.as
                <br />
                alisteema aeo meenulasteo opmeo seeemeao
                <br />
                holmeonse eo sassebeo weemeanu an.sas
              </p>
              <div className="mr-justice-s">Mr. Justice&#39;s Lawsuits</div>
            </div>
          </div>
          <div className="top-text-title">
            <div className="flexcontainer">
              <p className="text">
                <span className="span">
                  Serens poementos berees seemental ase he astateem
                  <br />
                </span>
              </p>
              <p className="text">
                <span className="span">
                  sementalboyaond aeo es ambeiental estwelem
                  <br />
                </span>
              </p>
              <p className="text">
                <span className="span">{""}</span>
              </p>
            </div>
            <div className="text-wrapper-4">Town of Wonder</div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
