import React from "react";
import "./style.css";
import ItemCase from "../../components/pages/ItemCase";
import DialougeBox from "../../components/pages/DialougeBox";


export const JobOfficeStore = ({setPage, items, setItems}) => {

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
          "Well, well, well, what do we have here? A potential client who appreciates style and charm.",
          "Ah, my office is graced by by presence. I hope you know I'm persuasive as you I am good-looking.",
          "Beauty and brains, that's what I bring to the table. Now, what can I do for you?",
          "Welcome, my dear. I'm the lawyer who can bend the law to your advantage, for the right price.",
          "I see you appreciate the finer things in life. Let's discuss your case over a glass of the finest wine, shall we?",
          "Time is precious, and so is your case. Let's make sure we maximize both, shall we?",
          "They say a handsome face or a good argument can sway the toughest juries. Lucky for you, I've got both.",
          "I hope you're ready to enter a world where rules are flexible, and winning is everything.",
          "In the courtroom, charisma is my greatest weapon. But enough about me; what's your story?",
          "I'm not just any lawyer; I'm the one you want in your corner when things get messy.",
          "Let's be clear, darling. Winning isn't everything; it's the only thing.",
          "A word of advice: trust me implicitly, and we'll come out on top. Doubt me, and, well, you'll see.",
          "Your case is like a puzzle, and I have a knack for fitting the pieces just right.",
          "In this profession, bending the truth is an art form. Lucky for you, I'm a master artist.",
          "I hope you don't mind playing a little dirty. Winning isn't for the faint of heart.",
          "We're about to embark on a thrilling adventure, my friend. Get ready for a wild ride.",
          "They say that the law is blind, but with me, it has a keen eye for success.",
          "I've been known to pull a few strings behind the scenes. Are you ready for some creative legal tactics?",
          "I make winning look good, don't you think? Let's make sure your case does the same.",
          "I have a reputation for getting my clients what they want, no matter the cost.",
          "Justice is a noble pursuit, but sometimes, bending it a little can yield the sweetest rewards.",
          "I've been called many things: charming, cunning, ruthless. Which side of me do you need today?",
          "In many a room, I'm a force to be reckoned with. Courtroom, Ballroom, Bedroom... As in I take my work everywhere of course.",
          "My dear, you've entered the lion's den, but I assure you, I'm the one who can tame the beast.",
          "Winning isn't for the faint of heart, but with my guidance, we'll come out on top every time.",
          "In this world, power and beauty go hand in hand. Fortunately, I possess both.",
          "I'll be your advocate, your confidant, and your secret weapon in the courtroom.",
          "I've been known to turn the impossible into the undeniable. Are you ready for some legal magic?",
          "You've got the looks, well, a look, and I've got the brains. Together, we'll be an unbeatable team.",
          "Welcome to the game, my friend. With me as your lawyer, victory is just a signature away."
        ]

  return (
    <div className="job-office-store">
      <div className="overlap-wrapper-10">
        <div className="overlap-41">
          <div className="black-city-banner-2">
            <div className="overlap-42">
              <div className="text-wrapper-70">AmsterPam, DM</div>
              <div className="subtitle-2">
                <div className="overlap-group-20">
                  <p className="text-wrapper-71">OH CHILD ENZORI IS ONLY</p>
                  <div className="square-2" />
                </div>
              </div>
              <img className="circle-2" alt="Circle" src="/img/circle.png" />
            </div>
          </div>
          <div className="white-top-banner-3">
            <div className="overlap-43">
              <div className="white-background-2" />
              <div className="text-wrapper-72">Post Office</div>
              <img className="burger-icon-2" alt="Burger icon" src="/img/burger-icon.svg" />
            </div>
          </div>
          <div className="rectangle-18" />
          <p className="welcome-to-burger-2">
            Welcome to Burger Stop! Thanks for stopping by, let me know <br />
            if you need help with anything!
          </p>
          <img className="background" alt="Background" src="/img/background.png" />
          <img className="desk-2" alt="Desk" src="/img/desk-1.png" />
          <img className="image" alt="Image" src="/img/image-1.png" />
          <div className="black-city-banner-3">
            <div className="overlap-44">
              <div className="text-wrapper-73">Intl Waters City, NG</div>
              <div className="subtitle-3">
                <div className="overlap-group-20">
                  <p className="text-wrapper-71">OH CHILD ENZORI IS ONLY</p>
                  <div className="square-2" />
                </div>
              </div>
              <img className="circle-3" alt="Circle" src="/img/circle-2.png" />
            </div>
          </div>
          <div className="white-top-banner-4">
            <div className="overlap-45">
              <div className="text-wrapper-74">Mr. Justice’s Lawsuits</div>
            </div>
          </div>
          <img className="justice-icon" alt="Justice icon" src="/img/justice-icon.svg" />
          <div className="item-box-3"/>
          <ItemCase 
            items = {items}
            setItems = {setItems}
            setPage = {setPage}
            posStoreInventory = {posStoreInventory}
            totalItems = {3}
            />
            <DialougeBox 
              dialougeLines = {dialougeLines}
            />
        </div>
      </div>
    </div>
  );
};
