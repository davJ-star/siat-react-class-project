import React from 'react';

const FancyBorder = (props) => {
    return (
        <div className={`fancy-border fancy-border-${props.color}`}>
            {props.children}
        </div>
    );
}

export default FancyBorder;