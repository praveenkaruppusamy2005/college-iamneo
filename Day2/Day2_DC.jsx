import React from "react";
function Car()
{
    const Style=
    {
        textAlign:'center'
    }
    const Style2=
    {
        backgroundColor:"whitesmoke",
        border:"1px solid black",
        innerHeight:"10px",
        height:"400px",
        marginRight:'400px',
        marginLeft:'400px',
        borderRadius:'10px'
    }
   const  Style3=
    {
        height:"100px",
        border:"1px solid black",
        innerHeight:"10px",
        marginRight:'400px',
        marginLeft:'400px',
        borderRadius:'10px',
        marginTop:'10px',
        backgroundColor:'lightgrey'
    }
    const combin=
    {
        ...Style,...Style2
    }
    const combi=
    {
        ...Style,...Style3
    }
    const a={
        fontSize:"medium",
        fontWeight:'bold'
    }
    const b=
    {
        fontSize:"large",
        fontWeight:"bold"
    }
    return(
        <div>
            <h2 style={Style}>Car and Location Info</h2>
            <div style={combin}>
                <p style={a}>Tesla Model S</p>
                <img src="https://cdn.euroncap.com/media/72827/tesla-model-s.png?mode=crop&width=359&height=235" alt=' '></img>
            </div >
            <div style={combi}>
                <p style={b}>Tesla</p>
                <p>Palo Alto</p>
            </div>
        </div>
    )
}
export default Car