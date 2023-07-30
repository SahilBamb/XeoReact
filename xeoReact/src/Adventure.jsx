import {useState, useEffect} from 'react';

export default function Adventure(){

    function startAdv(){
        setProgress(0);
        setRateOfChange(1);
    }

    const [rateOfChange,setRateOfChange,] = useState(0);
    const [progress,setProgress,] = useState(0);    
    // var id = setInterval(function() {
    //     }, 1000);

    // setTimeout(function() {
    //         clearInterval(id);
    //     }, 5000);
    const speed = 200;

    useEffect(() =>{
        if (rateOfChange > 0 && progress < 1000 ) {
            setTimeout(() => setProgress(progress => progress += rateOfChange), speed)
        }
    }, [rateOfChange, progress])

    return (<>

        {/* * Select Pet
        * Start Adventure Button

        * Timeline with pet traveling
        * Updates with money, items, battles
            * Logging in text */}

<div style = {{height: "100px"}}></div>

        <div style = {{width: "1000px", 
                        height: "20px",
                        border: "solid black"}}
        
        ></div>
        <div style = {{
                        position: "relative",
                        top: "-23px",
                        width: progress + "px", 
                        height: "23px",
                        backgroundColor: (rateOfChange > 0) ? "green" : "red"
                        }}
        
        ></div>

        <img src="https://media.discordapp.net/attachments/1060071572280442964/1062969792090341426/fn_neopets_kitten_c542e997-5929-4e4d-a8f0-bbd8ff957950.png"
             style = {{
                        width: 100, 
                        borderRadius: "50%", 
                        border: "solid black",
                        position: "relative",
                        bottom: 90,
                        left: progress - 10
                    }}
        ></img>

        <button onClick={startAdv}>Start Adventure</button>
        <p>Rate of Change: {rateOfChange}</p>
        <p>Speed: {speed}</p>
        {progress >= 1000 && <h1>Adventure Completed</h1>}
        
    </>)
}