import React, { createContext, useState } from 'react';

const ContextBodyPage = (props) => {
    

    return (
        <div>
            <div style={{ 
                    backgroundColor: props.isMode ? 'black' : 'white', 
                    color: props.isMode ? 'white' : 'black' 
            }}>
                <h1>씨앗 수강생님, 화이팅</h1>
            </div>
        </div>
    );
};

export default ContextBodyPage;