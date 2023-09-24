import React from "react";
import "./style.css";
import ItemCase from "../../components/pages/ItemCase";
import DialougeBox from "../../components/pages/DialougeBox";

export const BubbleStore = ({setPage, items, setItems}) => {

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

        const dialougeLines = 
          Math.random() < 0.1 ?
            ['Bloop bloop!',
            'Fizz fizz!',
            'Pop pop! ',
            'Whirr whirr! ',
            'Gurgle gurgle! ',
            'Splish splish! ',
            'Boing boing! ',
            'Ping ping!',
            'Squish squish! ',
            'Chirp chirp! ',
            'Ding ding! ',
            'Zap zap! ',
            'Swoosh swoossh',
            'Sizzle sizz',
            'Tinkle tinkle!',
            'Clang clang! ',
            'Swirl swirl! ',
            'Plink plink!',
            'Flutter flutter! ',
            'Twirl twirl!',
            'Rustle rustle! ',
            'Whistle whistle!',
            'Blip blip!',
            'Rattle rattle!',
            'Jingle jingle!',
            'Hiss hiss!',
            'Clunk clunk! ',
            'Hum hum! ',
            'Crackle crackle!',
            'Chime! chime! '] : ["..."]

        


  return (
    <div className="bubble-store">
      <div className="overlap-group-wrapper-3">
        <div className="overlap-group-18">
          <div className="white-top-banner">
            <img className="bubble-icon" alt="Bubble icon" src="/img/bubble-icon.png" />
          </div>
          <DialougeBox 
              dialougeLines = {dialougeLines}
            />
          <ItemCase 
            items = {items}
            setItems = {setItems}
            setPage = {setPage}
            posStoreInventory = {posStoreInventory}
            totalItems = {6}
            />
          {/* <div className="item-box" /> */}
          <div className="overlap-37">
            {/* <div className="rectangle-16" /> */}
            {/* <div className="text-wrapper-64">...</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
