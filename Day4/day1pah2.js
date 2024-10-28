import React, { useEffect } from 'react'

const Day1pah2 = () => {

    let age = 18;
    let name = 'Kiran'
    let setStatus = false
    let userDefault = undefined
    let responseValue = null
    

    const printValue = () => {
        alert("Check the console output!")
        console.log(age)
        console.log(name)
        console.log(setStatus)
        console.log(userDefault)
        console.log(responseValue)
        age = 25
        setStatus = true
        console.log(age)
        console.log(name)
    }

  return (
    <>
        <h1>Primitive Data Type copy the values</h1>
        <input type='submit' onClick={() => printValue}></input>
    </>
  )
}

export default Day1pah2