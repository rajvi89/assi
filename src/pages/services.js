import React, { useState, useMemo } from "react";
import { useEffect, useRef } from "react";


export default function Services() {

    const [number , setNumber] = useState(0)
    const [dark, serDark] = useState(false)
    const doubleNumber = useMemo(() => {
        return slowFuction(number)
    }, [number])
    const themStyles = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark? 'white' : 'black'
    }
    return (
        <>
        <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))}/>
        <button onClick={() => serDark(prevDark => !prevDark)}>Change Them</button>
        <div style={themStyles}>{doubleNumber}</div>

        <h1>UseMemo</h1>
        </>
    )
}

function slowFuction(num) {
    
    console.log('Calling slow Function')
    for (let i=0;  i<= 1000000000; i++)
    {}
    return num * 2;
}


 