import React from 'react';
import PropTypes from 'prop-types';
import './baseSkeleton.css';

const BaseSkeleton = ({ type }) => {
    return(<div className={`skeleton ${type}`}></div>)
};

BaseSkeleton.propTypes = {
    type: PropTypes.string.isRequired
};

export default BaseSkeleton;
