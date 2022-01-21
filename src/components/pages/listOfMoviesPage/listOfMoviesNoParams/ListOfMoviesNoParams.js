import React from 'react';
import GenresSection from './genresSection/GenresSection';

//Component when user navigates to '/list' will offer navigation to list of trending, new releases etc...
const ListOfMoviesNoParams = () => {
    return( 
        <div className='container'>
            <h1 className='container-title'>What kind of List are you looking for?</h1>
            <GenresSection />
        </div>)
};

export default ListOfMoviesNoParams;
