import React, { useState } from 'react'

function GroceryInput({text,handleChange,handleAdd}) {
    
  return (
    <div>
        <input placeholder="Enter an item" value={text} onChange={(e)=>handleChange(e)}/>
        <button onClick={()=>handleAdd(text)}>Add</button>
    </div>
  )
}

export default GroceryInput