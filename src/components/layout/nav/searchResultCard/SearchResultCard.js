import React from 'react';
import './searchResultCard.css';
import { useNavigate } from 'react-router-dom';

const SearchResultCard = ({ toggleSearchModal, result }) => {
    const navigate = useNavigate();

    const onCardClick = () => {
        toggleSearchModal();
        navigate(`/movie/${result.id}`);
    }

    return (
        <div className='search-result-card' onClick={ onCardClick }>
            {console.log(result)}
            {
                result.poster_path !== null ?
                    <img className='search-result-card-img' 
                        src={`https://image.tmdb.org/t/p/original${result.poster_path}`} 
                        alt={`${result.title}`}
                        loading='lazy' /> :
                    <div className='search-result-card-no-img'></div>
            }
            <p className='search-result-card-title'>{result.title}</p>
        </div>
    )
}

export default SearchResultCard
