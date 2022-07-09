import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center py-4 z-[100] absolute px-4 w-full'>
            <Link to='/'>
                <h1 className="text-4xl font-bold text-red-600 cursor-pointer">NETFLIX</h1> 
            </Link>
            <div>
            <Link to='/signin'>
                <button className='text-white p-3 pr-4'>Sign In</button>
            </Link>
            <Link to='/signup'>
                <button className='bg-red-600 text-white px-3 py-3 rounded-md'>Sign Up</button>
            </Link>
            </div>   
        </div>
    );
};

export default Navbar;