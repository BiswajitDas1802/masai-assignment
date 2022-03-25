import React, { useEffect, useState } from 'react'
import EmployeeData from './EmployeeData'
import EmployeeForm from './EmployeeForm'

function Employee() {

const init ={
    userName:"",
    age:0,
    address:"",
    department:"",
    salary:0,
    isMarried:false,
}

useEffect(() => {
    getData()
},[])


const [first, setFirst] = useState(init)
const [data, setData] = useState([])

const handleChange=({name,value,type,checked})=>{
    setFirst({...first,
        [name]:type==="checkbox"?checked:value
    })
}

const handleSubmit =(e)=>{
    e.preventDefault()
    let payload = {...first}
    payload = JSON.stringify(payload)
    fetch("https://fake-server-app-biswa.herokuapp.com/employeedetails",{
        method: "POST",
        body: payload,
        headers: {"Content-Type": "application/json"}
    })
    .then(()=>{ 
        getData()
        setFirst({...first,
            userName:"",
            age:0,
            address:"",
            department:"",
            salary:0,
            isMarried:false,
        })
    }

    )
    .catch((err)=>console.log(err))
    

}

const getData =()=>{
    fetch("https://fake-server-app-biswa.herokuapp.com/employeedetails")
    .then((data)=>data.json())
    .then((data)=>setData([...data]))
    
}

  return (
    <div>
        <EmployeeForm handleSubmit={handleSubmit} first={first} handleChange={handleChange}/>
        <div style={{display: 'flex', flexDirection: 'column' ,width: '100%',alignItems: 'center'}}>
        {data?data.map((item)=><EmployeeData key={item.id} uData={item}/>):"Add Some Employee Details"}

        </div>
    </div>
  )
}

export default Employee