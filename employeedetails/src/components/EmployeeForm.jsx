import React from 'react'

function EmployeeForm({handleChange,handleSubmit,first}) {
    const {userName,age,address,department,salary,isMarried}=first
  return (
    <div>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <input value={userName} placeholder='Enter Your Name' onChange={(e)=>handleChange(e.target)} type="text" name="userName" /><br/>
            <input value={age} placeholder='Enter Your Age' onChange={(e)=>handleChange(e.target)} type="number" name="age" /><br/>
            <textarea value={address} placeholder='Enter Your Address' onChange={(e)=>handleChange(e.target)} type="text" name="address" /><br/>
            <select value={department} onChange={(e)=>handleChange(e.target)}  name="department" >
                <option value="">SELECT DEPARTMENT</option>
                <option value="IT">IT</option>
                <option value="HR">HR</option>
                <option value="FINANCE">FINANCE</option>
                <option value="MARKETING">MARKETING</option>
            </select>
            <br/>
            <input value={salary} placeholder='Enter Your Salary' onChange={(e)=>handleChange(e.target)} type="number" name="salary" /><br/>
            <label>MARRIED:
                <input value={isMarried} onChange={(e)=>handleChange(e.target)} type="checkbox" name="isMarried" /><br/>
            </label>
            <button type="submit">SUBMIT</button>
        </form>
    </div>
  )
}

export default EmployeeForm