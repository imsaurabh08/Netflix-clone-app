import React, { useState, useEffect } from 'react'
import axios from '../axios';
import requests from '../requests';
import './Banner.css'
function Banner() {
    const [movie, setmovie] = useState([]);
    useEffect(() => {
        async function fetchdata() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            const res = await request.data.results;
            setmovie(
                res[Math.floor(Math.random() * res.length - 1)]

            );
            return request
        }

        fetchdata();

    }, [])
    console.log(movie);
    function truncate(str,n){
return str?.length>n?str.substr(0,n-1)+"...":str;
    }
    return (
        <header className='banner'
            style={{
                backgroundSize: 'cover', backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}" )`
                , backgroundPosition: "center center"
            }}
        >
            <div className="banner_content">
                <h1 className='banner_title'>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">{truncate(movie?.overview,150)}</h1>
            </div>
            <div className="banner-fadebottom"></div>

        </header>
    )
}

export default Banner