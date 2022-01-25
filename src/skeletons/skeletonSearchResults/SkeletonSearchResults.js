import React from 'react';
import BaseSkeleton from '../BaseSkeleton';
import ShimmerAnimation from '../ShimmerAnimation';

const SkeletonSearchResults = () => {
    return (        
        [1,2,3,4,5,6,7,8,9].map(index => (
            <div className='skeleton-wrapper' key={index}>
                <ShimmerAnimation />
                <BaseSkeleton type='search-card' />
            </div>
        ))
    );
};

export default SkeletonSearchResults;
