import React, { createContext, useState } from 'react';
import { useContext } from 'react';
import ctx from './ContextHeaderPage';

const ContextBodyPage = (props) => {
    const { isMode } = useContext(ctx);

    return (
        <div>
            <div style={{ 
                    backgroundColor: isMode ? 'black' : 'white', 
                    color: isMode ? 'white' : 'black' 
            }}>
                <h1>씨앗 수강생님, 화이팅</h1>
            </div>
        </div>
    );
};

export default ContextBodyPage;