import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGenresList } from '../../../../../redux/movies/genresSlice';
import SkeletonGenresGrid from '../../../../../skeletons/skeletonGenresGrid/SkeletonGenresGrid';
import GenreTab from '../../../../shared/genreTab/GenreTab';
import './genresSection.css';

const GenresSection = () => {
    const { genresList, isLoading } = useSelector(state => state.genres);
    const dispatch = useDispatch();

    useEffect(() => {
        if(genresList.length === 0){
            dispatch(fetchGenresList());
        }
    }, [dispatch, genresList.length])

    return(
        <section className='genres-section'>
            <h2 className='sub-title'>Genres</h2>
            <div className='genres-grid'>
                {
                    !isLoading ? (
                        genresList.map(genre => <GenreTab genre={ genre } key={ genre.id }/>)
                    ) : (
                        <SkeletonGenresGrid />
                    )
                }
            </div>
        </section>
    )
};

export default GenresSection;
