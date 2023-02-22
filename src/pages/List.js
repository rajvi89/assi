import React, {useEffect, useState} from 'react'

export default function List({getItems}){
    const [items, setItems] = useState([])
    useEffect(() => {
        setItems(getItems(2))
        console.log('updating')
    }, [getItems])

    return items.map(items => <div key = {items}>{items} </div>)
}