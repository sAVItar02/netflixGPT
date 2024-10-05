import React from 'react'
import useMovieImages from '../hooks/useMovieImages'
import { useSelector } from 'react-redux';

const VideoTitle = ({movieId, title, overview}) => {
    const movieLogo = useSelector(store => store.movie.featuredMovieLogo);
    useMovieImages(movieId);

  return (
    <div className='flex flex-col items-start gap-8 absolute top-1/2 -translate-y-1/2 left-20'>
        {
            movieLogo ? <img className={`w-64 aspect-[${movieLogo.logoAspect}]`} src={"https://image.tmdb.org/t/p/original" + movieLogo.logoPath} alt="" /> : <h1>{title}</h1>
        }
        <p className='max-w-96 text-white font-bold [text-shadow:1px_1px_2px_#000000]'>{overview}</p>
        <div className='flex items-center justify-start gap-2'>
            <button className='flex gap-2 bg-white rounded-md font-semibold px-8 py-2.5 outline-none text-black hover:opacity-80 duration-150 text-lg'>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  className="icon icon-tabler icons-tabler-filled icon-tabler-player-play"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" /></svg>
                Play
            </button>
            <button className='flex gap-2 bg-white/30 rounded-md font-semibold px-8 py-2.5 outline-none text-black hover:opacity-80 duration-150 text-lg'>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-info-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg>
                More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle