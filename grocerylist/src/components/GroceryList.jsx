import React from 'react'

function GroceryList({items,del}) {
  return (
    <div>
        {items.map(({id,text})=>(
            <div key={id}>
                <p>{text}</p>
                <button onClick={()=>del(id)}>Delete</button> 
            </div>
        ))}
    </div>
  )
}

export default GroceryList