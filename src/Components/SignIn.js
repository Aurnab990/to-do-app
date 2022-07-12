import React from 'react';
import { Link } from "react-router-dom";

const SignIn = () => {
    return (
        <div className=' ml-2/4'>
            <div style={{"alignItems":"center", "margin":"auto","justifyContent":"center","marginLeft":"40%","marginTop":"30px","width":"1300px"}}>
            <input className='w-1/5 p-2 border-2 rounded-xl' type='email' placeholder='enter valid email'></input>
            <br></br>
            <br></br>
            <input className='w-1/5 p-2 border-2 rounded-xl' type='password' placeholder='enter password'></input>
            <br></br>
            <h1>Don't have an account?<Link to='/signin'><span className='text-red-500'>Create an account</span></Link></h1>
            <br></br>
            <button className='w-1/5 bg-yellow-700 p-1 text-white text-lg text-semibold rounded-xl'>sign-in</button>
            </div>
        </div>
    );
};

export default SignIn;