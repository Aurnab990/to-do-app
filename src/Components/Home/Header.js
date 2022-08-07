import React from 'react';

const Header = () => {
    return (
        <div className='text-center mt-10'>
            <h1 className='text-2xl mb-5 font-semibold text-red-400'>Add Your Task</h1>
            <div className='ml-19 font-semibold'>
            <input className='border-3 bg-red-200 p-3 w-1/3' type='text'></input>
            <button className='bg-yellow-300 p-3 font-semibold'>Add Task</button>
            </div>
        </div>
    );
};

export default Header;