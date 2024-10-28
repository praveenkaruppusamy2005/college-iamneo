import React ,{ useState }from 'react'

const Day3ce1 = () => {

    const [toggleMessage,setToggleMessage] = useState(false)

  return (
    <>
    {toggleMessage && <p>Hi! How are You!!!</p>}
    <input type="submit" value={toggleMessage ? "Hide Component" : "Show Component" } onClick={() => setToggleMessage(prev => !prev)}></input>
    </>
  )
}

export default Day3ce1