import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CinemaSvgGraphic} from './undraw_home_cinema_l7yl.svg';
import './notFound.css';

const NotFound = () => {
    return (
        <div className='not-found'>
            <div className='not-found-text-container'>
                <h2>404 <span>- Content not Found</span></h2>
                <div className='not-found-decor-line' />
                <h1>Hmmm... We could not find what your were looking for</h1>
                <div className='not-found-links'>
                    <Link to="/">Home</Link>
                    <div className='not-found-links-divider'></div>
                    <Link to="/list/my-movies">Your Saved Movies</Link>
                    <div className='not-found-links-divider'></div>
                    <Link to="/list/trending">Trending Movies</Link>
                    <div className='not-found-links-divider'></div>
                    <Link to="/list/new%20releases">Latest Releases</Link>
                </div>
            </div>
            <CinemaSvgGraphic className='not-found-graphic' />
        </div>
    )
}

export default NotFound
