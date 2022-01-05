import React from 'react'
import FeaturedMovie from './featuredMovie/FeaturedMovie';
import TrendingMovies from './trendingMovies/TrendingMovies';
import TopRated from './topRatedMovies/TopRated';

const HomePage = () => {
    return (
        <>
            <FeaturedMovie />
            <TrendingMovies />
            <TopRated />
        </>
    )
}

export default HomePage
