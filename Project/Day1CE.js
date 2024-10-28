import React from 'react'

function Day1ce1() {

    const alertFunc = () => {
        alert("Message from Javascript Alert!")
        console.log("Message to Developer")
    }

  return (
    <>
        <h1>Let we see the output of JAVASCRIPT</h1>
        <input type='submit' onClick={alertFunc}></input>
    </>
  )
}

export default Day1ce1
