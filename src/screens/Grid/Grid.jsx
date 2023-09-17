import React from "react";
import {useState, useEffect} from "react";
import "./style.css";

export const Grid = ({page, setPage}) => {

  const gridSize = 2;

  const colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "black", "white"];

  const arrayData = Array.from({ length: gridSize }, (_, index) => index);

  const divRow = Array.from({ length: gridSize }, (_, index) => <div style={{backgroundColor: colors[index]}} className="divRow"> {index} </div>);

  return (
    <div className="Grid">
      {arrayData.map((item, index) => (
        <div className="gridBox">
          {divRow}
        </div>
      ))}
    </div>
  );
}

