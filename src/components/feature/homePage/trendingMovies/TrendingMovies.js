//A horizontal list of movie cards which display details on hover. 
//Get list from movieDB API and store in redux slice as may use in other components down the tree (like recommendations)
import './trendingMovies.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTrendingMovies } from '../../../../redux/movies/trendingMoviesSlice';
import MovieCard from '../../../layout/movieCard/MovieCard';
import chevron from '../chevron.svg';

const TrendingMovies = () => {
    const trendingMovies = useSelector((store) => store.trendingMovies.trending);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchTrendingMovie = async () => {
        //Fetch data from endpoint and dispatch action addTRendingMovies with payload of movie object
        await fetch(`${process.env.REACT_APP_API_BASE_URL}/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`)
            .then(data => data.json())
            .then(res => {
                dispatch(addTrendingMovies(res.results));
            })
            .catch(e => console.log("Error Fetching Results - "+e));
        }

        fetchTrendingMovie();
    }, [dispatch])

    return (
        <section className='trending-movies-section movie-list-section'>
            <div className='trending-movies-decor movie-list-section-decor'></div>
            <div className='title'>
                <h2 className='title-text'>Trending Movies</h2>
                <p className='title-extra-text'>- Explore More <img className='title-chevron' src={ chevron } /></p>
            </div>
            <div className='horizontal-movies-list'>
                {trendingMovies.slice(0, 10).map(movie => <MovieCard key={ movie.id } movie={ movie } />)}
                { console.log(trendingMovies[0]) }
            </div>
        </section>
    )
}

export default TrendingMovies
