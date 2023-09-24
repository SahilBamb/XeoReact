import React from 'react';
import './stats.css';

export default function Stats({buttonColor = "#FFC700", stats, setStats}) {

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1)); // Generate a random index from 0 to i
      
          // Swap array[i] and array[j]
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }

    const buttonColorStyle = {
        backgroundColor: buttonColor
    }

    function statsColor(stat) {
        if (stat > 6) {
            return "high statsNum";
        }
        else if (stat < 4) {
            return "low statsNum";
        }
        else {
            return "med statsNum";
        }
    }

    function randomizeStats() {
        let temp = [];
        let rSum = 0;
        let limit = 20;

        for (let key in stats) {
            if (rSum >= limit) {
                temp.push(0)
            }
            else {
                temp.push(Math.floor(Math.random() * 10));
                rSum += temp[temp.length - 1];
            }
        }

        // shuffleArray(temp);
        
        setStats({
            fitness: temp[0],
            socialness: temp[1],
            goodness: temp[2],
            adventurousness: temp[3],
            happiness: temp[4],
            xFactor: temp[4]
        });
    }

    return (
            <div className="statScreen">
                <div className="stats-screen-5">
                    <div 
                        onClick = {randomizeStats}
                        style = {buttonColorStyle}
                        className="randomizeButton overlap-22">
                       
                        <div className="randomize-button-5">
                        <div className="text-wrapper-41">Randomize</div>
                        <img className="six-sided-dice-5" alt="Six sided dice" src="/img/six-sided-dice-1-4.svg" />
                        </div>
                    </div>
                    <div className="happiness-badge-9">
                        <div className="overlap-group-12">
                        <div className="text-wrapper-42">Happiness</div>
                        <div className={statsColor(stats.happiness)}>
                                {stats.happiness}
                        </div>
                    </div>
                    </div>
                    <div className="adventurousness-5">
                        <div className="overlap-23">
                        <div className="text-wrapper-44">Adventur-ousness</div>
                        <div className={statsColor(stats.adventurousness)}>
                            {stats.adventurousness}</div>
                        </div>
                    </div>
                    <div className="goodness-badge-5">
                        <div className="overlap-group-12">
                        <div className="text-wrapper-42">Goodness</div>
                        <div className={statsColor(stats.goodness)}>
                            {stats.goodness}</div>
                        </div>
                    </div>
                    <div className="happiness-badge-10">
                        <div className="overlap-group-12">
                        <div className="text-wrapper-42">Socialness</div>
                        <div className={statsColor(stats.socialness)}>
                            {stats.happiness}</div>
                        </div>
                    </div>
                    <div className="fitness-badge-5">
                        <div className="overlap-group-12">
                        <div className="text-wrapper-45">Fitness</div>
                        <div className={statsColor(stats.fitness)}>
                            {stats.fitness}</div>
                        </div>
                    </div>
                </div>
            </div>
    )}
