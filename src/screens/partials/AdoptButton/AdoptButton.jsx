import React from 'react';
import './adoptbutton.css';
import {useState} from 'react';

export default function AdoptButton({pet, pets, setPets, setPage, stats, disabled=false}) {

    function updatePets(pet) {
      if (disabled) return;
      pet.statsList = stats;
      setPets([...pets, {...pet}]); 
      setPage("Profile");
    }
    
    const [adoptable, setAdoptable] = useState(disabled ? "left-button-PNDO disabled" : "left-button-PNDO")

    return (
            <div className="AdoptButton">
                <div className={adoptable}>
                    <div 
                      onClick = {() => { 
                        updatePets(pet);
                      }}
                      className="petPage-Adopt overlap-group-7">
                      <div className="text-wrapper-25">Adopt Pet</div>
                  </div>
              </div>
            </div>
    )}
