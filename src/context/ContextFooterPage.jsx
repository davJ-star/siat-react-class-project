import React, { createContext, useState } from 'react';

const ContextFooterPage = (props) => {
    const changeHandler = () => {
        props.setIsMode(!props.isMode);
    }

    return (
        <div>
            <footer>
                <header style={{ 
                        backgroundColor: props.isMode ? 'black' : 'white'
                }}>
                    <button onClick={changeHandler}>모드 변경</button>
                </header>
            </footer>
        </div>
    );
};

export default ContextFooterPage;