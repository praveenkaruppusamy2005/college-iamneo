import React from "react";
function Smile()
{
    const Style=
    {
        alignItems:'center',
        justifyContent:'center',
        display:'flex'
    }
    return(
        <div >
            <h1 style={Style}>This is smile component</h1>
            <p style={Style}>Its a functonal component</p>
            <div style={Style}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScH_Grxjy9Z8gMwrfM2Z7cAUEo0ueBsFdyFg&s" alt=" "></img>
            </div>
        </div>
    )
}
export default Smile