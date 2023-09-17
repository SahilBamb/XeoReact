import React from 'react';
import './adoptbutton.css';

export default function AdoptButton({pet, pets, setPets, setPage, stats}) {

    return (
            <div className="AdoptButton">
                <div className="left-button-PNDO">
                <div 
                  onClick = {() => { 
                    console.log(pet);
                    setPets([...pets, {...pet}]); 
                    setPage("Profile");
                  }}
                  className="petPage-Adopt overlap-group-7">
                  <div className="text-wrapper-25">Adopt Pet</div>
                </div>
              </div>
            </div>
    )}
