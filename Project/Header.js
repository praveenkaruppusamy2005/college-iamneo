import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate=useNavigate();
    return (
        <header style={{justifyContent:"center",textAlign:"center"}}>
        <div style={{fontSize:"30px"}}>Toy Store</div>
            <div style={{justifyContent:'center',textAlign:"center",marginLeft:"500px"}}>
                <ul style={{display:"flex",flexDirection:"row",listStyle:"none"}}>
                    <li style={{marginLeft:"10px"}}><button onClick={()=>{navigate('/')}}>Home</button></li>
                    <li style={{marginLeft:"10px"}}><button onClick={()=>{navigate('/products')}}>Products</button></li>
                    <li style={{marginLeft:"10px"}}><button onClick={()=>{navigate('/cart')}}>Cart</button></li>
                    <li style={{marginLeft:"10px"}}><button onClick={()=>{navigate('/login')}}>Login</button></li>
                    {/* <li style={{marginLeft:"10px"}}><button onClick={()=>{navigate('/register')}}>Home</button></li>
                    {/* <li><Link to="/register">Signup</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li> */}
                </ul>
            </div>
        </header>
    );
};

export default Header;