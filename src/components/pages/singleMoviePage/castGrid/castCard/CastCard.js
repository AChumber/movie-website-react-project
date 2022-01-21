import React from 'react'
import './castCard.css';

const CastCard = ({ castMember }) => {
    return (
        <div className='cast-card'>
            <img className='cast-card-profile-image' src= {`https://image.tmdb.org/t/p/w200${castMember.profile_path}`} alt={`${ castMember.name }`} />
            <div className='cast-card-overlay'>
                <p className='cast-card-actor-name'>{ castMember.name }</p>
                <p className='cast-card-character-name'>{ castMember.character }</p>
            </div>
        </div>
    )
}

export default CastCard
