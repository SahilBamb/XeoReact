import React from "react";
import "./style.css";

export const OceanScenePage = ({page, setPage}) => {
  return (
    <div className="ocean-scene-page">
      <div className="overlap-wrapper-3">
        <div className="overlap-11">
          <p className="gere-leng-summa">
            Gere leng summa <br />
            pearl emma forlema neuvaam
          </p>
          <div className="map-link map-1 rectangle" 
            onClick = {() => setPage("SpacePlace")}
            style = {{backgroundImage: "url(https://cdn.animaapp.com/projects/64c6fa72dcbdbd5700002966/releases/64fa837645d7dfa9d8ca45f7/img/main-image.png)", 
                      backgroundSize: "cover", 
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center"}}
            
          />
          <div className="map-link rectangle-2" />
          <div className="map-link rectangle-3" />
          <div className="map-link rectangle-4" />
          <div className="map-link rectangle-5" />
          <img className="rectangle-6" alt="Rectangle" src="/img/rectangle-7.png" />
          <div className="text-wrapper-18">Xexplore</div>
          <div className="rectangle-7" />
          <div className="rectangle-8" />
          <div className="flexcontainer">
            <p className="text">
              <span className="span">
                All Those <br />
              </span>
            </p>
            <p className="text">
              <span className="span">Who Wander Are Lost</span>
            </p>
          </div>
          <div className="text-wrapper-19">Mecelllion Era of Sons</div>
          <p className="lorem-ipsum-is">
            The current era defined by progress and hope for  <br />
            what is and what will be. Only when we uncover the <br />
            how our goals fester can we begin to unravel truth <br />
            Enjoy
          </p>
          <p className="text-wrapper-20">Explore the world of Xeopia and see all</p>
          <div className="rectangle-9" />
          <div className="rectangle-10" />
          <div className="group">
            <div className="overlap-group-6">
              <div className="rectangle-11" />
              <div className="rectangle-12" />
              <div className="rectangle-13" />
              <div className="rectangle-14" />
            </div>
          </div>
          <div className="text-wrapper-21">Sans</div>
          <div className="text-wrapper-22">Cony</div>
          <div className="text-wrapper-23">Socke</div>
          <div className="text-wrapper-24">Omeo</div>
          {/* <div className="rectangle-15" /> */}
          
        </div>
      </div>
    </div>
  );
};
