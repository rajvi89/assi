import React, {useState, useCallback} from "react";
import List from "./List";

export default function About(){

    const [number, setNumber] = useState(1)
    const [dark, setDark ] = useState(false)

    const getItems = useCallback((incremonter) => {
        return [number + incremonter, number + 1,+ incremonter, number + 2 + incremonter]
    }, [number])
    const  theme = {
        backgroundColor:  dark ? '#333' : '#FFF',
        color: dark ? '#FFF' :'#333'
    }
    return (
        <div style={theme}>
            <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))}/>
            <button onClick={() => setDark(prevDark => !prevDark)}>
                Toggle them
            </button>
            <List getItems={getItems}></List>
        <h1>useCallback</h1>
        </div>)
   
}