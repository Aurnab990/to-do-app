import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div style={{"backgroundColor":"#142453", "marginLeft":"270px", "margin":"90px","width":"680px","height":"340px","border":"20px","borderRadius":"20px"}} >
            <div style={{"marginLeft":"20%","marginTop":"35px",}} className=''>
            <h1  className="text-3xl text-white font-semibold">Welcome to UMe TO-DO-APP</h1>
            <p></p>
            <br></br>
            <Link to='/signin'><button className='bg-blue-400 p-1 w-2/4 lg:w-3/4 text-lg lg:text-xl text-white'>Sign-in</button></Link>
            <br></br>
            <br></br>
            <button className='bg-blue-400 p-1 w-2/4 lg:w-3/4 text-xl text-white'>Sign-up</button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            </div>
        </div>
        </div>
    );
};

export default Header;