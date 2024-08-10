import React from "react";
function Inline()
{
    const Style=
    {
       color:'green'
    }
    const Para={
color:'darkblue',
fontSize:'16px',
backgroundColor:'lightblue',
padding:'10px',
borderStyle:'1px solid blue',
borderRadius:'5px'
    }
    return(
        <div>
        <h1 style={Style}>Inline Style in JSX Example.</h1>
        <p style={Para}>This is a paragraph with inline styles applied.</p>
        </div>
    )
}
export default Inline;