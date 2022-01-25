import React from 'react';
import BaseSkeleton from '../BaseSkeleton';
import ShimmerAnimation from '../ShimmerAnimation';
import './skeletonGenresList.css';

const SkeletonGenresList = () => {
    return (
        <div className='skeleton-wrapper'>
            <ShimmerAnimation />
            <div className='skeleton-tab-container'>
                {
                    [1,2,3,4,5,6].map(index => <BaseSkeleton key={index} type='tab' />)
                }
            </div>
        </div>
    );
};

export default SkeletonGenresList;
