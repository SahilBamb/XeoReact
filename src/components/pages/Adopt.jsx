import "../../styles/Adopt.css";

const possiblePets = [
    {species : "Birbeak",
    color : "Vanilla",
    available : true},

    {species : "Bumble",
    color : "Vanilla",
    available : true},

    {species : "Bunni",
    color : "Vanilla",
    available : true},

    {species : "Draco",
    color : "Vanilla",
    available : true},

    {species : "Foxi",
    color : "Vanilla",
    available : true},

    {species : "Gryphon",
    color : "Vanilla",
    available : false},

    {species : "Izzard",
    color : "Vanilla",
    available : true},

    {species : "Kitti",
    color : "Vanilla",
    available : false},

    {species : "Nervish",
    color : "Vanilla",
    available : false},

    {species : "Pando",
    color : "Vanilla",
    available : false},

    {species : "Razortooth",
    color : "Vanilla",
    available : false},

    {species : "Tigre",
    color : "Vanilla",
    available : false},

    {species : "Turt",
    color : "Vanilla",
    available : false}]

const imgURL = "https://raw.githubusercontent.com/SahilBamb/XeoReact/ImageStore/Pet/"

export default function Adopt({pets, setPets, setPage}){
    return (
        <div>
            <header>
            </header>
            <content>
                <div className="AdoptPetsCase">
                {possiblePets.map((pet) => {
                    return (
                        <div className="AdoptPetCard">
                            <img 
                                onClick={() => {
                                    // setPets([...pets, {...pet}]);
                                    console.log(pet.species);
                                    setPage(pet.species);
                                }}
                                className= {pet.available ? "petIcon"  : "petIcon inactive"}
                                src = {imgURL + pet.species + "/" + pet.color + ".png"}></img>
                            <p
                                className="petIconName" 
                            >{pet.species}</p>
                        </div>
                    )

                })}
                </div>

                    
            </content>

            <footer>
                
            </footer>
        </div>
    )

}