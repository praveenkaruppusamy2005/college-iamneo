import React, { useState } from 'react'

const Day3pah1 = () => {

    const [toggle,setToggle] = useState(false)

  return (
    <>
    {toggle ? <p>Kaioken</p> : <p>SuperSaiyan</p>}
    <input type="Submit" value="Switch" onClick={() => setToggle(prev => !prev)}></input>
    </>
  )
}

export default Day3pah1