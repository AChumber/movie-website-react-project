import React from 'react';
import useFetch from '../../../../hooks/useFetch';
import HorizontalMoviesList from '../../../shared/horizontalMoviesList/HorizontalMoviesList';
import SkeletonHorizontalList from '../../../../skeletons/skeletonHorizontalList/SkeletonHorizontalList';

const RelatedMovies = ({ movieId }) => {
    const { data:relatedMovies, isLoading:isRelatedMoviesLoading } = useFetch(`${process.env.REACT_APP_API_BASE_URL}/movie/${movieId}/similar?api_key=${process.env.REACT_APP_API_KEY}&page=1`);

    return (
        <div className='single-movie-container'>
                <h2 className='extra-detail-title'>Related Movies</h2>
                {
                    !isRelatedMoviesLoading ? (
                        <HorizontalMoviesList list={ relatedMovies.results.slice(0, 10) } />
                    ) : (
                        <SkeletonHorizontalList />
                    )
                }
            </div>
    )
}

export default RelatedMovies
