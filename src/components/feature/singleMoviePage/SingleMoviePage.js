import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import Spinner from '../../shared/loadingSpinner/Spinner';
import CastGrid from './castGrid/CastGrid';
import DetailsTable from './detailsTable/DetailsTable';
import MovieAvailability from './movieAvailability/MovieAvailability';
import RelatedMovies from './relatedMovies/RelatedMovies';
import "./singleMoviesPage.css";

const SingleMoviePage = () => {
    const [director, setDirector] = useState('');
    const [writers, setWriters] = useState('')
    let { movieId } = useParams();
    const { data:movieData, isLoading } = useFetch(`${process.env.REACT_APP_API_BASE_URL}/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`);

    const formatRuntime = (runtime) => {
        //Format runtime to 'xxhrs xxmins'
        const hours = Math.floor(runtime/60);
        const mins = runtime % 60;
        return `${hours}h ${mins}m`;
    }
    const getaverageRatingBackgroundColor = (rating) => {
        if(rating >= 7) {
            return 'percent-high';
        } else if(rating > 4 && rating < 7) {
            return 'percent-medium';
        } else {
            return 'percent-low';
        }
    }
    

    return (
        <>
            <div className='single-movie-page-container'>
                {
                    (!isLoading) ? (
                        <section className='movie-details-container'>
                            <img className='single-movie-poster' src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`} alt={`${ movieData.title } poster`} loading='lazy' />
                            <div className='single-movie-detail-container'>
                                <h1>{movieData.title}</h1>
                                <div className='single-movie-details-extra-title-details'>
                                    <p>{formatRuntime(movieData.runtime)}</p>
                                    <p>{movieData.release_date}</p>
                                </div>
                                <div className={`single-movie-details-percent ${getaverageRatingBackgroundColor(movieData.vote_average)}`}>
                                    <p>{movieData.vote_average}</p>
                                </div>
                                <div className={(movieData.genres.length <= 2 ? 'single-movie-genres-small' : 'single-movie-genres-large')+' single-movie-genres'}>
                                    { movieData.genres.map((genre, i) => <p key={i}>{ genre.name }</p>) }
                                </div>
                                <div className='single-movie-overview'>
                                    <h2>Overview</h2>
                                    <p>{ movieData.overview !== null ? movieData.overview : 'No Overview available' }</p>
                                    { movieData.tagline && <p className='single-movie-overview-tagline'>{ movieData.tagline }</p>}
                                </div>
                                <div className='single-movie-director-writer'>
                                    <div className='single-movie-director-container'>
                                        <h3>Director</h3>
                                        <p>{ director }</p>
                                    </div>
                                    <div className='single-movie-writer-container'>
                                        <h3>Writers</h3>
                                        <p>{ writers }</p>
                                    </div>
                                </div>
                                <div className='single-movie-watch-providers'>
                                    <MovieAvailability movieId={ movieId } />
                                </div>
                            </div>
                        </section>
                    ) :
                    (
                        <Spinner />
                    )
                }

                
            </div>
            
            <CastGrid movieId={ movieId } setDirector={ setDirector } setWriters={ setWriters } />

            <div className='single-movie-container'>
                <h2 className='extra-detail-title'>More Details</h2>
                {
                    !isLoading ? (
                        <DetailsTable movieData={ movieData } />
                    ) : (
                        <Spinner />
                    )
                }

            </div>

            <RelatedMovies movieId={ movieId } />
            
        </>
    )
}

export default SingleMoviePage
