import useFetch from '../../../../../hooks/useFetch';
import './searchByGenre.css';
import { useNavigate } from 'react-router-dom';

const SearchByGenre = ({ onGenreTabClick }) => {
    const { data, isLoading } = useFetch(`${process.env.REACT_APP_API_BASE_URL}/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`)

    return (
        <div className='search-modal-genres'>
            <h2>Search By Genre</h2>
            <div className='search-modal-genres-container'>
                {
                    !isLoading && (
                        data.genres.slice(0,6).map(genre => (
                            <div className='search-genre-tab' onClick={ () => onGenreTabClick(genre) } >
                                <p>{ genre.name }</p>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    )
};

const GenreTab = ({ genre }) => {
    const navigate = useNavigate();

    return (
        <div className='search-genre-tab' onClick={ () => navigate(`/list/genre?genre_id=${genre.id}`) } >
            <p>{ genre.name }</p>
        </div>
    )
}

export default SearchByGenre;
