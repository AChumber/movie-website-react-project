import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { fetchGenresList } from '../../../../../redux/movies/genresSlice'; //dispatch this
import GenreTab from '../../../../shared/genreTab/GenreTab';
import './searchByGenre.css';


const SearchByGenre = () => {
    const { genresList, isLoading } = useSelector(store => store.genres);
    const dispatch = useDispatch();

    //useEffect to prevent more than one dispatch of fetching data
    useEffect(() => {
        //check redux state is genres list exist(length > 0) else dispatch async thunk 
        if(genresList.length === 0) {
            dispatch(fetchGenresList());
        }
    }, []);
    

    return (
        <div className='search-modal-genres'>
            <h2>Search By Genre</h2>
            <div className='search-modal-genres-container'>
                {
                    !isLoading && (
                        genresList.slice(0,6).map(genre => (
                            <GenreTab genre={ genre } key={genre.id} />
                        ))
                    )
                }
            </div>
        </div>
    )
};

export default SearchByGenre;
