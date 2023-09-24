import React from "react";
import StatsScreen from "../partials/StatsScreen/index";
import "./Bumble.css";
import AdoptButton from "./../partials/AdoptButton/AdoptButton";

export default function Bumble(props) {
  const {
    overlapGroup7,
    mainHeadingText,
    loremIpsumIsSimpl,
    adoptPet,
    viewVariants,
    turt_Img,
    statsScreenProps,
  } = props;

  const statsScreenData = {
    fitness: "Fitness",
    number1: "9",
    happiness1: "Happiness",
    number2: "9",
    goodness: "Goodness",
    number3: "9",
    adventurOusness: "Adventur-ousness",
    number4: "9",
    happiness2: "Happiness",
    number5: "9",
    randomize: "Randomize",
};

const bumbleData = {
    overlapGroup7: "/img/main-rectangle-card-trtl-1.png",
    mainHeadingText: "Buzzing Bumble",
    loremIpsumIsSimpl: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem",
    adoptPet: "Adopt Pet",
    viewVariants: "/img/view-variants.png",
    turt_Img: "/img/turt-img-1.png",
    statsScreenProps: statsScreenData,
};

  return (
    <div className="container-center-horizontal">
      <div className="bumble screen">
        <div className="overlap-group7" style={{ backgroundImage: `url(${overlapGroup7})` }}>
          <div className="card-trtl">
            <div className="overlap-group6">
              <header className="header">
                <h1 className="main-heading-text">{mainHeadingText}</h1>
                <p className="lorem-ipsum-is-simpl">{loremIpsumIsSimpl}</p>
              </header>
              <img className="line" src="/img/line.svg" alt="Line" />
            </div>
            <div className="flex-row">
              <StatsScreen {...statsScreenProps} />
              <div className="buttons_trtl">
                <div className="overlap-group1">
                  <div className="adopt-pet">{adoptPet}</div>
                </div>
                <div className="overlap-group">
                  <img className="view-variants" src={viewVariants} alt="View Variants" />
                </div>
              </div>
            </div>
          </div>
          <img className="turt_img" src={turt_Img} alt="Turt_img" />
        </div>
      </div>
    </div>
  );
}

