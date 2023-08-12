import React from "react";
import "./StatsScreen.css";

function StatsScreen(props) {
  const {
    fitness,
    number1,
    happiness1,
    number2,
    goodness,
    number3,
    adventurOusness,
    number4,
    happiness2,
    number5,
    randomize,
  } = props;

  return (
    <div className="stats-screen">
      <div className="overlap-group4">
        <a href="#inner-rectangle" className="align-self-flex-center">
          <div className="fitness raleway-bold-black-30px">{fitness}</div>
        </a>
        <div className="number raleway-bold-manhattan-40px">{number1}</div>
      </div>
      <div className="overlap-group3">
        <div className="happiness raleway-bold-black-30px">{happiness1}</div>
        <div className="number raleway-bold-manhattan-40px">{number2}</div>
      </div>
      <div className="overlap-group-1">
        <div className="ness raleway-bold-black-30px">{goodness}</div>
        <div className="number raleway-bold-manhattan-40px">{number3}</div>
      </div>
      <div className="overlap-group1-1">
        <div className="adventur-ousness raleway-bold-black-30px">{adventurOusness}</div>
        <div className="number-1 raleway-bold-manhattan-40px">{number4}</div>
      </div>
      <div className="overlap-group-1">
        <div className="ness raleway-bold-black-30px">{happiness2}</div>
        <div className="number raleway-bold-manhattan-40px">{number5}</div>
      </div>
      <div className="overlap-group5">
        <img className="six-sided-dice-1" src="/img/six-sided-dice-1-6.svg" alt="six-sided-dice 1" />
        <div className="randomize">{randomize}</div>
      </div>
    </div>
  );
}

export default StatsScreen;
