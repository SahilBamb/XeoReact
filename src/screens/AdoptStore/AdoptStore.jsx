import React from "react";
import "./style.css";

const possiblePets = [
  {species : "Birbeak",
  color : "Vanilla",
  available : 0},

  {species : "Bumble",
  color : "Vanilla",
  available : 0},

  {species : "Bunni",
  color : "Vanilla",
  available : 0},

  {species : "Draco",
  color : "Vanilla",
  available : 0},



  {species : "Foxi",
  color : "Vanilla",
  available : 1},

  {species : "Gryphon",
  color : "Vanilla",
  available : 1},

  {species : "Izzard",
  color : "Vanilla",
  available : 1},

  {species : "Turt",
  color : "Vanilla",
  available : 1},

  // {species : "Kitti",
  // color : "Vanilla",
  // available : 1},



  {species : "Nervish",
  color : "Vanilla",
  available : 2},

  {species : "Pando",
  color : "Vanilla",
  available : 2},

  {species : "Razortooth",
  color : "Vanilla",
  available : 2},

  {species : "Tigre",
  color : "Vanilla",
  available : 2}

]

const now = new Date();
const month = now.getMonth();

const availablePets = possiblePets.filter(pet => (pet.available == month % 3));
const notAvailablePets = possiblePets.filter(pet => (pet.available == (month+1) % 3));


export const AdoptStore = ({pets, setPets, setPage, disabled=false}) => {
  console.log(disabled);
  return (
    <div className="adopt-store">
      <div className="action-card-wrapper">
        <div className="action-card">
          <div className="overlap-29">
            <div className="bottom-input">
              <div className="bottom-placeholder-wrapper">
                <input className="bottom-placeholder" />
              </div>
            </div>
            <div className="orange-button">
              <div className="overlap-30">
                <div className="text-wrapper-53">See All Pets</div>
              </div>
            </div>
            <div className="text-wrapper-54">Pets Available Next Month</div>
            <div className="bottom-boxes">
              {notAvailablePets.map((pet,index) => {
                const divName = "adopt-notAvailable div-" + (index+2);
                const imgURL = "https://raw.githubusercontent.com/SahilBamb/XeoReact/ImageStore/Pet/" + pet.species + "/" + pet.color + ".png";
                const imgURLFinal = 'url("' + imgURL + '")';

                const divStyle = {
                  opacity: pet.available ? 1 : 0.5,
                  backgroundImage: imgURLFinal,
                  backgroundSize: 'cover', // You can adjust this property to control how the image is displayed
                };

                return (
                  <div 
                    className={divName} 
                    style={divStyle}
                    onClick={() => {
                      // console.log(pet.species + " is not available for adoption!");
                      setPage(pet.species);
                      }}
                    />
                );
              })}
            </div>
            <p className="text-wrapper-55">Exclusive Pets You Can’t Have (Yet)</p>
            <div className="middle-feature">
              <img className="middle-white-line" alt="Middle white line" src="/img/middle-white-line.svg" />
              <p className="middle-text">
                Available Pets Are Cycled Every Month&nbsp;&nbsp;(Next Month These Pets Will be Gone!)
              </p>
            </div>
            <div className="top-boxes">
              {availablePets.map((pet,index) => {
                const divName = "adopt-available div-" + (index+2);
                const imgURL = "https://raw.githubusercontent.com/SahilBamb/XeoReact/ImageStore/Pet/" + pet.species + "/" + pet.color + ".png";
                const imgURLFinal = 'url("' + imgURL + '")';

                const divStyle = {
                  opacity: pet.available ? 1 : 0.5,
                  backgroundImage: imgURLFinal,
                  backgroundSize: 'cover', // You can adjust this property to control how the image is displayed
                };

                return (
                  <div 
                    className={divName} 
                    style={divStyle}
                    onClick={() => {
                      console.log(pet.species);
                      // setPets([...pets, {...pet}]);
                      setPage(pet.species);
                      }}
                    />
                );
              })}
              
            </div>
            <div className="green-button">
              <div className="overlap-31">
                <div className="text-wrapper-56">Adopt Your Xeo</div>
              </div>
            </div>
            <div className="top-input">
              <div className="top-placeholder-wrapper">
                <input className="top-placeholder" />
              </div>
            </div>
            <img className="top-splash-image" alt="Top splash image" src="/img/top-splash-image.png" />
            <div className="main-title">Adopt a Xeopet</div>
          </div>
        </div>
      </div>
    </div>
  );
};
