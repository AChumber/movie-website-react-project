import React from 'react';
import useFetch from '../../../../hooks/useFetch';
import './movieAvailability.css';

const MovieAvailability = ({ movieId }) => {
    const { data, isLoading } = useFetch(`${process.env.REACT_APP_API_BASE_URL}/movie/${movieId}/watch/providers?api_key=${process.env.REACT_APP_API_KEY}`);
    return (
        <>
            <h2 className='single-movie-subtitle'>Where to Watch</h2>
            <div className='movie-providers-list'>
                {
                    (!isLoading && data.results['GB']['flatrate'] ) ? (
                        data.results['GB']['flatrate'].map((provider, index) => (
                            <div className='movie-provider' key={index}>
                                <img className='movie-provider-logo-img'
                                    src={ `https://image.tmdb.org/t/p/w500/${provider.logo_path}` } 
                                    alt={`${provider.provider_name}`} />
                                <p className='movie-provider-name'>{provider.provider_name}</p>
                            </div>
                        ))
                    ) : (
                        <p>Not Streaming anywhere</p>
                    )
                }
            </div>
        </>
    )
}

export default MovieAvailability;