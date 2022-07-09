import axios from 'axios';
import React, { useEffect, useState } from 'react';
import requests from '../Requests'

const Main = () => {

    const imageBaseUrl = "https://image.tmdb.org/t/p/original/"
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(requests.requestPopular)
        .then(response => {
            setMovies(response.data.results)
        })
    },[])
    const movie = movies[Math.floor(Math.random() * movies.length)]
    console.log(movies);

    return (
        <div className='w-full h-[500px]'>
            <div className='w-full h-full'>
                <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'/>
                <img className=' w-full h-full object-cover' src={`${imageBaseUrl}${movie?.backdrop_path}`} alt={movie?.title} />
            </div>
            <div  className='absolute top-[20%] p-4 w-full'>
                <h1 className='text-white text-3xl font-bold'>{movie?.title}</h1>
                <div className='my-4'>
                    <button className='border bg-gray-300 text-black py-2 px-5 rounded-sm'>Play</button>
                    <button className='border text-white py-2 px-5 ml-4 rounded-sm'>Watch Later</button>
                </div>
                <p className='text-gray-400 text-sm '>Release: {movie?.release_date}</p>
                <p className='text-gray-200 w-full md:max-w-[70%] lg:max-w-[50%] xl-max-w-[35%]'>{movie?.overview}</p>
            </div>
        </div>
    );
};

export default Main;