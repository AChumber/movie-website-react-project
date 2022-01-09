import React from 'react'
import './castCard.css';

const CastCard = ({ castMember }) => {
    return (
        <div className='cast-container'>
            <img className='cast-profile-image' src= {`https://image.tmdb.org/t/p/w200${castMember.profile_path}`} />
            <p>{ castMember.name }</p>
            <p>{ castMember.character }</p>
        </div>
    )
}

export default CastCard
