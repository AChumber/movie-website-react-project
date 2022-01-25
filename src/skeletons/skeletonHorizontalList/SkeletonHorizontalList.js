import React from 'react';
import BaseSkeleton from '../BaseSkeleton';
import ShimmerAnimation from '../ShimmerAnimation';
import './skeletonHorizontalList.css';

const SkeletonHorizontalList = () => {
    return(
        <div className='skeleton-wrapper'>
            <ShimmerAnimation />
            <div className='skeleton-card-list-container'>
                {
                    [1,2,3,4,5,6,7,8,9].map(num => <BaseSkeleton key={num} type='card' />)
                }
            </div>
            <BaseSkeleton type='text' />
        </div>
    )
};

export default SkeletonHorizontalList;
