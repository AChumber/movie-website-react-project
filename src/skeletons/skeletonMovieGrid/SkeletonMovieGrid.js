import React from 'react';
import BaseSkeleton from '../BaseSkeleton';
import ShimmerAnimation from '../ShimmerAnimation';
import './skeletonMovieGrid.css';

const SkeletonMovieGrid = () => {
    const getNumSkeletonMovieCards = () => {
        let cards = [];
        for(let i = 0; i < 12; i++) {
            cards.push(i);
        }

        return cards;
    }
    return (
        <div className='skeleton-wrapper skeleton-movie-grid-wrapper'>
            <ShimmerAnimation />
            <div className='skeleton-movie-grid-container'>
                {
                    getNumSkeletonMovieCards().map(num => <BaseSkeleton key={num} type='card' />)
                }
            </div>
            <br />
            <BaseSkeleton type='button' />
        </div>
    );
};

export default SkeletonMovieGrid;
