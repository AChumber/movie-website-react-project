import { useEffect } from 'react'
import chevron from '../chevron.svg';
import './topRated.css';
import { useSelector, useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../../../../redux/movies/topRatedMoviesSlice';
import MovieCard from '../../../layout/movieCard/MovieCard';

const NewReleases = () => {
    const topRatedMovies = useSelector((store) => store.topRatedMovies.toprated);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_BASE_URL}/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&page=1`)
            .then(data => data.json())
            .then(res => {
                dispatch(addTopRatedMovies(res.results))
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <section className='new-releases-section movie-list-section'>
            <div className='new-releases-decor movie-list-section-decor'></div>
            <div className='title'>
                <h2 className='title-text'>Top Rated</h2>
                <p className='title-extra-text'>- Explore More <img className='title-chevron' src={ chevron } /></p>
            </div>
            <div className='horizontal-movies-list'>
                {topRatedMovies.slice(0, 10).map(movie => <MovieCard key={ movie.id } movie={ movie } />)}
            </div>
        </section>
    )
}

export default NewReleases
