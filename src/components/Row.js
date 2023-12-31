import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube';

import axios from '../axios';
import './Row.css';
import movieTrailer from 'movie-trailer';
function Row(props) {
  const { title, fetchUrl, isLargeRow } = props;
  const [movies, setmovies] = useState([])
  const[trailerUrl,setTrailerUrl]=useState("")
  const base_url = "https://image.tmdb.org/t/p/original/"
  useEffect(() => {

    async function fetchdata() {
      const request = await axios.get(fetchUrl);
      setmovies(request.data.results);
      return request;
    }
    fetchdata();

  }, [fetchUrl])
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }
  };
  // console.log(movies);
const handleClick=(movie)=>{
   if(trailerUrl)
   {
    setTrailerUrl("")
   }
   else{
    movieTrailer(movie?.name || "").then(
      (url)=>{
        const urlParams=new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"))
      }
    ).catch((error)=>console.log(error))
   }

}

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map(movie => (

          <img className={`row_poster   ${isLargeRow && "row_posterLarge"}`}
            key={movie.id}
            onClick={()=>handleClick(movie)}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />

        ))
        }
      </div>
    {trailerUrl &&  <YouTube videoId={trailerUrl} opts={opts} /> }
    </div>
  )
}

export default Row