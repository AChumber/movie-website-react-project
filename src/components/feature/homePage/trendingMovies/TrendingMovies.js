//A horizontal list of movie cards which display details on hover. 
//Get list from movieDB API and store in redux slice as may use in other components down the tree (like recommendations)
import './trendingMovies.css';
import useFetch from '../../../../hooks/useFetch';
import MovieCard from '../../../shared/movieCard/MovieCard';
import chevron from '../chevron.svg';
import Spinner from '../../../shared/loadingSpinner/Spinner';

const TrendingMovies = () => {
    const { data:trendingMovies, isLoading } = useFetch(`${process.env.REACT_APP_API_BASE_URL}/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`);

    return (
        <section className='trending-movies-section movie-list-section'>
            <div className='trending-movies-decor movie-list-section-decor'></div>
            <div className='title'>
                <h2 className='title-text'>Trending Movies</h2>
                <p className='title-extra-text'>- Explore More <img className='title-chevron' src={ chevron } alt='Explore more Trending Movies' /></p>
            </div>
            {
                !isLoading ? (
                    <div className='horizontal-movies-list'>
                        {trendingMovies.results.slice(0, 10).map(movie => <MovieCard key={ movie.id } movie={ movie } />)}
                    </div>
                ) : (
                    <Spinner />
                )
            }
        </section>
    )
}

export default TrendingMovies
