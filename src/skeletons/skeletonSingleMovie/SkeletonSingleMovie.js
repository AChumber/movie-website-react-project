import React from 'react';
import BaseSkeleton from '../BaseSkeleton';
import ShimmerAnimation from '../ShimmerAnimation';
import './skeletonSingleMovie.css';

const SkeletonSingleMovie = () => {
    return (
        <div className='skeleton-wrapper skeleton-single-movie-container'>
            <ShimmerAnimation />
            <BaseSkeleton type='image' />
            <div className='skeleton-single-movie-details'>
                <BaseSkeleton type='title' />
                <BaseSkeleton type='text' /><br/>
                <BaseSkeleton type='text' /><br/>
                <BaseSkeleton type='text' /><br/>
                <BaseSkeleton type='text' /><br/>
                <BaseSkeleton type='text' /><br/>
                <BaseSkeleton type='text' /><br/><br />
                <BaseSkeleton type='title' />
                <BaseSkeleton type='text' /><br/>
                <BaseSkeleton type='title' />
                <BaseSkeleton type='text' /><br/><br />
                <div className='skeleton-single-movie-where-to-watch'>
                    <BaseSkeleton type='title' />
                </div>
            </div>
        </div>
    );
};

export default SkeletonSingleMovie;
