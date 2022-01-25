import React from 'react';
import BaseSkeleton from '../BaseSkeleton';
import ShimmerAnimation from '../ShimmerAnimation';
import './skeletonFeatureMovie.css';

const SkeletonFeatureMovie = () => {
    return (
        <div className='skeleton-wrapper'>
            <ShimmerAnimation />
            <div className='skeleton-featured-movie-container'>
                <BaseSkeleton type='image' />
                <div className='skeleton-featured-movie-details'>
                    <BaseSkeleton type='title'/><br />
                    <BaseSkeleton type='text' /><br />
                    <BaseSkeleton type='text' /><br />
                    <BaseSkeleton type='text' /><br />
                    <BaseSkeleton type='text' /><br />
                    <BaseSkeleton type='text' /><br />
                    <BaseSkeleton type='text' /><br />
                    <BaseSkeleton className='skeleton-featured-movie-btn' type='button' />
                </div>
            </div>
        </div>
    );
};

export default SkeletonFeatureMovie;
