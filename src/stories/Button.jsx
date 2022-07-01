import React from "react";
import PropTypes from 'prop-types';
import './Button.scss';

export default function Cta({label, primary, outline, size}) {

    const primarymode = primary ? `primary` : `secondary`;
    const outlinemode = outline ? `-outline`: '';

    return (
        <button type="button" className={`button ${primarymode}${outlinemode} ${size}`}>{label}</button>
    )
}

Cta.propTypes = {

    label: PropTypes.string.isRequired,
    primary: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    outline: PropTypes.bool,
};

Cta.defaultProps = {
    primary: false,
    size: 'medium',
    label: 'Button',
    outline: false,
};