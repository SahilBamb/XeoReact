import React from "react";
import "./style.css";
import ItemCase from "../../components/pages/ItemCase";

export const BurgerStore = ({setPage, items, setItems}) => {

  const posStoreInventory = 
        [{type : "Paintbrush",
        details : "Vanilla",
        description : {"Cost" : 100, 
                    "Description" : "A magical potion that makes you basic."},
        rarity : 1},
        {type : "Paintbrush",
        details : "Mushroom",
        description : {"Cost" : 9999, 
                    "Description" : "A magical potion gives your pet a penchant for shrooms."},
        rarity : 2,}];

  const dialougeLines = [
    "Hey there, handsome! Welcome to Burger. Stop. I'll whip up something delicious just for you, though I hope my burger-making skills can live up to your expectations.",
    "Well, hello, hero! Ready to indulge in some burger magic? I'm here to serve you with a smile, even if I'm a bit shy.",
    "Hey, champ! Our burgers are made with love, and I'll try my best to make sure they're as amazing as you deserve.",
    "Hi, cutie pie! You've just stepped into Burger Paradise, and I'll do my best to make your visit unforgettable. Just don't be too harsh on me; I'm still learning the grill!",
    "Hello, sweetie! Your burger wishes are my command, even if I sometimes worry about getting your order just right.",
    "Welcome to burger heaven! I'm here to make your day sizzle, though I have to admit, I get a little nervous when someone as charming as you walks in.",
    "Hey, burger lover! Your smile is the secret ingredient to our success, and I hope I can keep it that way.",
    "Hi there, burger enthusiast! Your choice is the highlight of my day, even if I sometimes second-guess my cooking skills.",
    "Hello, burger boss! I'm ready to make your burger dreams come true, though I hope you'll be patient with me as I learn the ropes.",
    "Welcome back, honey! I'm so glad to see you again. Your continued support means the world to me, even though I sometimes worry if you'll still enjoy my burgers."]

  const randomDialogue = dialougeLines[Math.floor(Math.random() * dialougeLines.length)];
  const randomDialogueLen = randomDialogue.length;
  const greetingLine1 = randomDialogue.substring(0, randomDialogueLen/2);
  const greetingLine2 = randomDialogue.substring((randomDialogueLen/2), randomDialogueLen);

  return (
    <div className="burger-store">
      <div className="overlap-wrapper-9">
        <div className="overlap-38">
          <img className="store-background" alt="Store background" src="/img/store-background.png" />
          <img className="storekeeper" alt="Storekeeper" src="/img/storekeeper.png" />
          <img className="desk" alt="Desk" src="/img/desk.png" />
          <div className="black-city-banner">
            <div className="overlap-39">
              <div className="text-wrapper-65">AmsterPam, DM</div>
              <div className="subtitle">
                <div className="overlap-group-19">
                  <p className="text-wrapper-66">OH CHILD ENZORI IS ONLY</p>
                  <div className="square" />
                </div>
              </div>
              <img className="circle" alt="Circle" src="/img/circle.png" />
            </div>
          </div>
          <div className="white-top-banner-2">
            <div className="overlap-40">
              <div className="white-background" />
              <p className="BURGER-STOP-NO">
                <span className="text-wrapper-67">BURGER. STOP</span>
                <span className="text-wrapper-68">&nbsp;</span>
                <span className="text-wrapper-69">(NO BURGERS AVAILABLE)</span>
              </p>
              <img className="burger-icon" alt="Burger icon" src="/img/burger-icon.svg" />
            </div>
          </div>
          <div className="item-box-2" />
          {/* <div className="rectangle-17" /> */}
          <p className="welcome-to-burger">
            {greetingLine1}<br />
            {greetingLine2}
          </p>
        </div>
      </div>
      <ItemCase 
            items = {items}
            setItems = {setItems}
            setPage = {setPage}
            posStoreInventory = {posStoreInventory}
            />
    </div>
  );
};
