import React from 'react'

function EmployeeData({uData}) {
    const {userName,age,address,department,salary,isMarried,id}=uData
  return (
    <div style={{width:"200px",border:"2px solid red"}}>
        <p>Name:{userName}</p>
        <p>Age:{age}</p>
        <p>Address:{address}</p>
        <p>Department:{department}</p>
        <p>salary:{salary+" rs"}</p>
        <p>Married:{isMarried?"Married":"Unmarried"}</p>
    </div>
  )
}

export default EmployeeData