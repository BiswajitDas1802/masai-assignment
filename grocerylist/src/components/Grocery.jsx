import React, { useState } from 'react'
import GroceryInput from './GroceryInput'
import GroceryList from './GroceryList'
import {v4 as uuid} from 'uuid'

function Grocery() {
    const [text, setText] = useState("")
    const handleChange=(e)=>{
        setText(e.target.value)
    }
   
    const [items, setItems] = useState([])

    

    const handleAdd=(text)=>{
        let payload={
            text,
            id:uuid(),
        }
        setItems([...items,payload])
        setText("")
    }

    const del=(id)=>{
        setItems(items.filter((item)=>item.id!=id))
    }

  return (
    <div>
        <h1>Grocery List</h1>
        <GroceryInput text={text} handleChange={handleChange} handleAdd={handleAdd}/>
        <GroceryList items={items} del={del}/>
    </div>
  )
}

export default Grocery