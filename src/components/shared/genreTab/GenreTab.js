import React from 'react';
import { useNavigate } from 'react-router-dom';
import './genreTab.css';

const GenreTab = ({ genre }) => {
    const navigate = useNavigate();

    return (
        <div className='search-genre-tab' onClick={ () => navigate(`/list/genre?genre_id=${genre.id}&genre=${genre.name}`) }>
            <p>{ genre.name }</p>
        </div>
    );
};

export default GenreTab;
