import React from "react";
import {useState, useEffect} from "react";
import "./style.css";

export const FighterGambling = ({page, setPage}) => {

  function createFighter() {

    
    const adjectives = [
      'Heroic',
      'Legendary',
      'Courageous',
      'Virtuous',
      'Noble',
      'Honorable',
      'Admirable',
      'Magnificent',
      'Glorious',
      'Majestic',
      'Wonderful',
      'Fantastic',
      'Splendid',
      'Remarkable',
      'Exemplary',
      'Exceptional',
      'Outstanding',
      'Extraordinary',
      'Brilliant',
      'Marvelous',
      'Distinguished',
      'Inspirational',
      'Resplendent',
      'Divine',
      'Uplifting',
      'Regal',
      'Grand',
      'Sublime',
      'Awe-inspiring',
      'Radiant',
      'Angelic',
      'Gracious',
      'Charismatic',
      'Gentle',
      'Benevolent',
      'Charming',
      'Enchanting',
      'Enthusiastic',
      'Elegant',
      'Harmonious',
      'Serene',
      'Tranquil',
      'Radiant',
      'Breathtaking',
      'Alluring',
      'Seraphic',
      'Delightful',
      'Glowing',
      'Heartwarming',
      'Splendorous',
      'Joyful',
      'Jubilant',
      'Wholesome',
      'Celebrated',
      'Thrilling',
      'Empowering',
      'Inspiring',
      'Graceful',
      'Noble-minded',
      'Heroine-like',
      'Exquisite',
      'Noble-hearted',
      'Poignant',
      'Altruistic',
      'Aesthetic',
      'Ethereal',
      'Ennobling',
      'Sincere',
      'Revered',
      'Illustrious',
      'Precious',
      'Admirable',
      'Auspicious',
      'Harmonious',
      'Enrapturing',
      'Exultant',
      'Enraptured',
      'Heartfelt',
      'Ineffable',
      'Reverent',
      'Beautiful',
      'Humble',
      'Authentic',
      'Decorous',
      'Majestic',
      'Glowing',
      'Outstanding',
      'Positive',
      'Noble-minded',
      'Celebrated',
      'Grateful',
      'Chivalrous',
      'Vibrant',
      'Grateful',
      'Rejuvenating',
      'Cherished',
      'Sovereign',
      'Exalted',
      'Radiant',
      'Dazzling',
      'Evil',
      'Nefarious',
      'Sinister',
      'Malevolent',
      'Villainous',
      'Wicked',
      'Corrupt',
      'Devious',
      'Diabolical',
      'Maleficent',
      'Vile',
      'Malicious',
      'Hateful',
      'Cruel',
      'Atrocious',
      'Repugnant',
      'Malignant',
      'Odious',
      'Sinful',
      'Despicable',
      'Abominable',
      'Detestable',
      'Infernal',
      'Dark',
      'Unholy',
      'Dastardly',
      'Fiendish',
      'Treacherous',
      'Hateful',
      'Hideous',
      'Malefic',
      'Monstrous',
      'Foul',
      'Revolting',
      'Grim',
      'Repulsive',
      'Infamous',
      'Grotesque',
      'Loathsome',
      'Horrible',
      'Horrific',
      'Terrifying',
      'Miserable',
      'Unpleasant',
      'Rotten',
      'Repellant',
      'Abhorrent',
      'Filthy',
      'Spiteful',
      'Mephitic',
      'Putrid',
      'Ghastly',
      'Bitter',
      'Contemptible',
      'Venomous',
      'Hateful',
      'Corrosive',
      'Heinous',
      'Iniquitous',
      'Pernicious',
      'Abject',
      'Fearsome',
      'Nasty',
      'Destructive',
      'Malefic',
      'Odorous',
      'Insidious',
      'Grotesque',
      'Loathsome',
      'Perverse',
      'Rancid',
      'Sinuous',
      'Nauseating',
      'Macabre',
      'Unhallowed',
      'Satanic',
      'Demonic',
      'Cursed',
      'Noxious',
      'Venomous',
      'Contaminating',
      'Oppressive',
      'Vicious',
      'Despised',
      'Deranged',
      'Venomous',
      'Belligerent',
      'Cursed',
      'Putrescent',
      'Spine-chilling',
      'Bloodthirsty',
      'Malign',
      'Venomous',
      'Vexatious',
      'Nightmarish',
      'Poisonous',
      'Pestilential',
      'Grisly',
      'Malevolence',
      'Unwholesome',
      'Pestilent'];

    const names = [
    'Alexander',
    'Julius',
    'Napoleon',
    'Leonardo',
    'Confucius',
    'Galileo',
    'Aristotle',
    'William',
    'Isaac',
    'Socrates',
    'Mahatma',
    'Genghis',
    'Michelangelo',
    'Thomas',
    'Marco',
    'Julius',
    'Cleopatra',
    'Sun Tzu',
    'Charles',
    'Leonardo',
    'Martin',
    'Albert',
    'Vincent',
    'Benjamin',
    'Ernest',
    'Johann',
    'Ludwig',
    'Winston',
    'Theodore',
    'Abraham',
    'Alfred',
    'Fidel',
    'Franklin',
    'Theodore',
    'Winston',
    'Pablo',
    'Ernest',
    'Ludwig',
    'Johann',
    'Albert',
    'Benjamin',
    'Vincent',
    'Martin',
    'Leonardo',
    'Charles',
    'Sun Tzu',
    'Cleopatra',
    'Julius',
    'Marco',
    'Thomas',
    'Michelangelo',
    'Genghis',
    'Mahatma',
    'Socrates',
    'Isaac',
    'William',
    'Aristotle',
    'Galileo',
    'Confucius',
    'Leonardo',
    'Napoleon',
    'Julius',
    'Alexander',
    'Cleopatra',
    'Joan',
    'Catherine',
    'Amelia',
    'Marie',
    'Florence',
    'Rosa',
    'Eleanor',
    'Elizabeth',
    'Indira',
    'Mother Teresa',
    'Anne',
    'Margaret',
    'Mary',
    'Jane',
    'Frida',
    'Maya',
    'Malala',
    'Harriet',
    'Queen Victoria',
    'Princess Diana',
    'Sojourner',
    'Emmeline',
    'Clara',
    'Eleanor',
    'Sacagawea',
    'Amelia',
    'Anne',
    'Mary',
    'Marie',
    'Catherine',
    'Joan',
    'Florence',
    'Rosa',
    'Elizabeth',
    'Indira',
    'Mother Teresa',
    'Margaret',
    'Jane',
    'Frida',
    'Maya',
    'Malala',
    'Harriet',
    'Queen Victoria',
    'Princess Diana',
    'Sojourner',
    'Emmeline',
    'Clara',
    'Eleanor',
    'Sacagawea',
    'Amelia',
    'Anne',
    'Marie',
    'Catherine',
    'Joan',
    'Elizabeth',
    'Rosa',
    'Florence',
    'Indira',
    'Margaret',
    'Mother Teresa'];

    let FighterName = names[Math.floor(Math.random() * names.length)];
    let FighterHealth = Math.floor(Math.random() * 100);
    let FighterAttack = Math.floor(Math.random() * 10);
    let Image = "/img/Fighters/Fighter" + Math.floor(Math.random() * 4) + ".png";


    let Fighter = {
      name: FighterName,
      adj: adjectives[Math.floor(Math.random() * adjectives.length)],
      luck: Math.floor(Math.random() * 100),
      dex: Math.floor(Math.random() * 100) + 10,
      ability: Math.floor(Math.random() * 4),
      health: FighterHealth,
      maxHealth: FighterHealth,
      attack: FighterAttack,
      image: Image,
      killStreak: 0
    };
    return Fighter;
  }

  function processResults() {
    
  }

  function waitForVariableChange(variable, targetValue) {
    return new Promise((resolve) => {
      const checkVariable = () => {
        if (variable !== targetValue) {
          resolve();
        } else {
          setTimeout(checkVariable, 100); // Polling every 100ms (adjust as needed)
        }
      };
  
      checkVariable();
    });
  }

  function abilityProcess(fighter1, fighter2, fighter1Health, fighter2Health) {
    
    if (fighter1.ability == 1){
      setFighter1({...fighter1, health: (Math.floor(fighter1Health + (fighter1.health * 0.1)))});
    }
    else if (fighter1.ability == 2){
      setFighter1({...fighter1, attack: Math.floor(fighter1.attack + (fighter1.attack * 0.1))});
    }
    else if (fighter1.ability == 3){
      setFighter1({...fighter1, attack: Math.floor(fighter1.luck + (fighter1.luck * 0.1))});
    }

    if (fighter2.ability == 1){
      setFighter2({...fighter2, health: (Math.floor(fighter2Health + (fighter2.health * 0.1)))});
    }
    else if (fighter2.ability == 2){
      setFighter2({...fighter2, attack: Math.floor(fighter2.attack + (fighter2.attack * 0.1))});
    }
    else if (fighter2.ability == 3){
      setFighter2({...fighter2, attack: Math.floor(fighter2.luck + (fighter2.luck * 0.1))});
    }

  }
  

  const [money, setMoney] = useState(100);

  const [fighter1, setFighter1] = useState(createFighter());
  const [fighter2, setFighter2] = useState(createFighter());

  const [gamblingAmount, setGamblingAmount] = useState([0,0,0]);

 function fight(fighter1, fighter2) {

    let fighter1Health = fighter1.health;
    let fighter2Health = fighter2.health;
  
    let fighter2damage = fighter2.attack * (Math.random() * (1.5) * (fighter2.luck/100));
    let fighter1damage = fighter1.attack * (Math.random() * (1.5) * (fighter1.luck/100));

    fighter1Health = Math.floor((Math.random() * fighter1.dex > 10) ? Math.max(fighter1.health - fighter2damage,0) : fighter1Health);
    fighter2Health = Math.floor((Math.random() * fighter2.dex > 10) ? Math.max(fighter2.health - fighter1damage,0) : fighter2Health);

    if (fighter1Health <= 0) {
      setMoney(money + (gamblingAmount[0]*2)); 
      setGamblingAmount([0,0,0]);
      setFighter1(createFighter());
      setFighter2({...fighter2, health: fighter2.maxHealth, killStreak: fighter2.killStreak + 1})
    }
    else if (fighter2Health <= 0) {
      setMoney(money + (gamblingAmount[1]*2));
      setGamblingAmount([0,0,0]);
      setFighter2(createFighter());
      setFighter1({...fighter1, health: fighter1.maxHealth, killStreak: fighter1.killStreak + 1})
    }

    else {
      // abilityProcess(fighter1, fighter2, fighter1Health, fighter2Health);
      setFighter1({...fighter1, health: fighter1Health});
      setFighter2({...fighter2, health: fighter2Health});
    }
  }

  function healthStyle(health, maxHealth) {

    let healthColor = "blue";

    if ((health / maxHealth) > 0.6) {
      healthColor = "green"
    }
    else if ((health / maxHealth) > 0.3) {
      healthColor = "yellow"
    }
    else {
      healthColor = "red"
    }



    return ({
      width: ((health / maxHealth) * 100) + "%",
      backgroundColor: healthColor
    });
  }

  useEffect(() => {
    // Create a new interval and store its ID
    const intervalId = setInterval(() => {
      // Your action to be repeated goes here
      fight(fighter1, fighter2);
    }, 1000);

    // Clear the previous interval when the component unmounts or when fighter1 and fighter2 change
    return () => clearInterval(intervalId);

  }, [fighter1, fighter2]); 



  return (
    <div className="FighterGambling">
      <div className="FighterArena">
        
        <div className="FighterIcon Fighter1">
          <div className="FighterName">{fighter1.adj} {fighter1.name}</div>
          <div 
              className="FighterHealth"
              style={healthStyle(fighter1.health, fighter1.maxHealth)}
              >{fighter1.health} HP</div>
          <div className="FighterAttack">Attack: {fighter1.attack}</div>
          <div className="FighterDex">Dex: {fighter1.dex}</div>
          <div className="FighterLuck">Luck: {fighter1.luck}</div>
          <div className="FighterKillstreak">KS: {fighter1.killStreak}</div>
          <div className="Fighter1">
            <img src={fighter1.image} alt="Fighter1Body" className="FighterBody Fighter1Body"/>
          </div>
        </div>

        <div className="FighterIcon Fighter2">
          <div className="FighterName">{fighter2.adj} {fighter2.name}</div>
          <div 
                className="FighterHealth"
                style={healthStyle(fighter2.health, fighter2.maxHealth)}
                >{fighter2.health} HP</div>
          <div className="FighterAttack">Attack: {fighter2.attack}</div>
          <div className="FighterAttack">Dex: {fighter2.dex}</div>
          <div className="FighterLuck">Luck: {fighter2.luck}</div>
          <div className="FighterKillstreak">KS: {fighter2.killStreak}</div>
          <div className="Fighter2">
            <img src={fighter2.image} alt="Fighter2Body" className="FighterBody Fighter2Body"/>
          </div>
        </div>

        <button className="FighterIcon GambleButton" 
                disabled = {money <= 0 || fighter1.health !== fighter1.maxHealth 
                  || fighter2.health !== fighter2.maxHealth}
                onClick={() => {
                  setMoney(money - 1);
                  setGamblingAmount([gamblingAmount[0] + 1, gamblingAmount[1], gamblingAmount[2]]);
                }} >Bet {fighter1.adj + " " + fighter1.name} Will Fail: {gamblingAmount[0]}</button>

        <button className="FighterIcon GambleButton" 
                disabled = {money <= 0 || fighter1.health !== fighter1.maxHealth 
                  || fighter2.health !== fighter2.maxHealth}
                onClick={() => {
                  setMoney(money - 1);
                  setGamblingAmount([gamblingAmount[0], gamblingAmount[1] + 1, gamblingAmount[2]]);
                }} >Bet {fighter1.adj + " " + fighter1.name} Will Fail: {gamblingAmount[1]}</button>

      </div>

      <button 
        onClick={() => {fight(fighter1,fighter2)}} 
        className="FighterButton"
        >Fight!</button>
      <div className="FighterButton">Money {money}</div>
      
    </div>
  );
};
