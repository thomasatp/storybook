
import React from "react";
import PropTypes from 'prop-types';
import './Icons.scss';

export default function ArrowDown({darkMode, sizeMode}) {

    const hehe = darkMode ? '#ffffff' : '#191919';
    const size = sizeMode === 'small' ? 'icon-small' : sizeMode === 'medium' ? 'icon-medium' : sizeMode === 'large' ? 'icon-large' : 'icon-medium';

    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill={hehe} className={size} xmlns="http://www.w3.org/2000/svg">
            <path d="M11.65 21.85L6.15 16.35C6.05 16.25 6 16.15 6 16C6 15.85 6.05 15.75 6.15 15.65C6.35 15.45 6.65 15.45 6.85 15.65L11.5 20.3V2.5C11.5 2.2 11.7 2 12 2C12.3 2 12.5 2.2 12.5 2.5V20.3L17.15 15.65C17.35 15.45 17.65 15.45 17.85 15.65C18.05 15.85 18.05 16.15 17.85 16.35L12.35 21.85C12.3 21.9 12.25 21.95 12.2 21.95C12.15 22 12.05 22 12 22C11.95 22 11.85 22 11.8 21.95C11.75 21.95 11.7 21.9 11.65 21.85Z" fill={hehe}/>
         </svg>
    )
}

ArrowDown.propTypes = {
    darkMode: PropTypes.bool,
    sizeMode: PropTypes.oneOf(['small', 'medium', 'large']),
};

ArrowDown.defaultProps = {
    darkMode: false,
    sizeMode: 'medium',
};