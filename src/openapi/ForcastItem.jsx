import React from 'react';
import PropTypes from 'prop-types';

const ForcastItem = ({ date, temperature, description }) => {
    return (
        <div className="forcast-item">
            <div className="forcast-date">{date}</div>
            <div className="forcast-temp">{temperature}°C</div>
            <div className="forcast-desc">{description}</div>
        </div>
    );
};

ForcastItem.propTypes = {
    date: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
};

export default ForcastItem;