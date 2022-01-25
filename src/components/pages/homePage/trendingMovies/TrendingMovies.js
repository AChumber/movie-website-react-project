//A horizontal list of movie cards which display details on hover. 
//Get list from movieDB API and store in redux slice as may use in other components down the tree (like recommendations)
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './trendingMovies.css';
import chevron from '../chevron.svg';
import HorizontalMoviesList from '../../../shared/horizontalMoviesList/HorizontalMoviesList';
import SkeletonHorizontalList from '../../../../skeletons/skeletonHorizontalList/SkeletonHorizontalList';

const TrendingMovies = () => {
    const { trendingList, isLoading } = useSelector(state => state.trendingMovies);
    const navigate = useNavigate();

    return (
        <section className='trending-movies-section movie-list-section' id='#trending'>
            <div className='trending-movies-decor movie-list-section-decor'></div>
            <div className='title' onClick={ () => navigate('/list/trending') }>
                <h2 className='title-text'>Trending Movies</h2>
                <p className='title-extra-text'>- Explore More <img className='title-chevron' src={ chevron } alt='Explore more Trending Movies' /></p>
            </div>
            {
                !isLoading ? (
                    <HorizontalMoviesList list={ trendingList.slice(0, 10) } />
                ) : (
                    <SkeletonHorizontalList />
                )
            }
        </section>
    )
}

export default TrendingMovies
