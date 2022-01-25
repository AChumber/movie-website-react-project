import React, { useEffect } from 'react';
import GenresSection from './genresSection/GenresSection';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTrendingList } from '../../../../redux/movies/trendingMoviesSlice'; 
import HorizontalMoviesList from '../../../shared/horizontalMoviesList/HorizontalMoviesList';
import { useNavigate } from 'react-router-dom';
import './listOfMoviesNoParams.css';
import SkeletonHorizontalList from '../../../../skeletons/skeletonHorizontalList/SkeletonHorizontalList';

//Component when user navigates to '/list' will offer navigation to list of trending, new releases etc...
const ListOfMoviesNoParams = () => {
    const { trendingList, isLoading } = useSelector(state => state.trendingMovies);
    const myMovies = useSelector(state => state.myMovies.movies);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if(trendingList.length === 0) {
            dispatch(fetchTrendingList());
        }
    }, [dispatch, trendingList.length])

    return( 
        <div className='container list-of-movies-no-params'>
            <h1 className='container-title'>What kind of List are you looking for?</h1>
            <GenresSection />
            {
                (myMovies.length !== 0) && (
                    <section className='list-of-movies-no-params-my-movies-section'>
                        <h2 className='sub-title'>My Movies</h2>
                        <HorizontalMoviesList list={ (myMovies.length > 15 ? myMovies.slice(0,15) : myMovies) } 
                            isAddToMyMovies={false} />
                            <button className='list-of-movies-no-params-btn'
                                onClick={ () => navigate(`/list/my-movies`) }>Explore your movies list</button>
                    </section>
                ) 
            }
            <section className='list-of-movies-no-params-trending-section'>
                <h2 className='sub-title'>Trending</h2>
                {
                    !isLoading ? (
                        <>
                            <HorizontalMoviesList list={ trendingList.slice(0, 15) } />
                            <button className='list-of-movies-no-params-btn'
                                onClick={ () => navigate(`/list/trending`) }>Explore more Trending Movies</button>
                        </>
                    ) : (
                        <SkeletonHorizontalList />
                    )
                }
            </section>
        </div>)
};

export default ListOfMoviesNoParams;
