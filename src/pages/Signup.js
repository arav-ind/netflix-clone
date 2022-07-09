import React from 'react';

const Signup = () => {
    const bgImage = "https://assets.nflxext.com/ffe/siteui/vlv3/8ee18735-ada3-45be-b383-a94701054bb9/bffa76da-b175-43bc-b7ef-e47a5095b535/IN-en-20220613-popsignuptwoweeks-perspective_alpha_website_large.jpg"
    return (
        <>
        <div className='w-full h-full'>
            <div className='w-full h-full bg-black/70 absolute' />
            <img className='w-full h-screen object-cover' src={bgImage}/>
            <div className='absolute left-0 right-0 w-[450px] h-[600px] bg-black/80'>
                <h1>Sign In</h1>
                <input type='text'/>
                <input type='password'/>
                <button>Sign In</button>
            </div>
        </div>
        </>
    );
};

export default Signup;