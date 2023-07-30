import {useState, useEffect} from 'react';

export default function Counter(){
    const [count, setCount] = useState(0);
    const increment = () => setCount((c) => c + 1);

    useEffect(function myEffect () {
        console.log("useEffect")
    }, [count])

    return (
        <>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
        </>
    )

}


