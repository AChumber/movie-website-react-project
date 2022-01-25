import React from 'react';
import BaseSkeleton from '../BaseSkeleton';
import ShimmerAnimation from '../ShimmerAnimation';

const SkeletonGenresGrid = () => {
    return (
        [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(index => (
            <div className='skeleton-wrapper' key={index}>
                <ShimmerAnimation />
                <BaseSkeleton type='tab' />
            </div>
        ))

    );
};

export default SkeletonGenresGrid;