import {useState} from 'react';
import {rarities} from '../pages/config.js';
import "../../styles/DialougeBox.css";
import itemDetails from '../pages/itemDetails.jsx';

export default function DialougeBox({dialougeLines = ["Sorry, lost for words."]}) {

      const randomDialogue = dialougeLines[Math.floor(Math.random() * dialougeLines.length)];
      const randomDialogueLen = randomDialogue.length;
      let greetingLine1 = "";
      let greetingLine2 = "";
      if (randomDialogueLen > 50) {
        greetingLine1 = randomDialogue.substring(0, randomDialogueLen/2);
        greetingLine2 = randomDialogue.substring((randomDialogueLen/2), randomDialogueLen);
      }
      else {
        greetingLine1 = randomDialogue;
        greetingLine2 = "";
      }
    return (
        <>
            <p className=".dia-box welcome-to-burger">
                {greetingLine1}<br />
                {greetingLine2}
            </p>
        </>
    );
}