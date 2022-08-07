import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='text-center'>
            <div className=' gap-20 flex mt-10 px-32 ml-96 ' >
               <Link className='bg-black p-3 border-2 text-white font-bold' to ='/'>Home</Link>
               <Link className='bg-black p-3 border-2 text-white font-bold ' to ='alltodo'>All Task</Link>
            </div>
        </div>
    );
};

export default Navbar;