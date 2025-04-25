import React, { createContext, use, useContext, useState } from 'react';
import ctx from './ContextHeaderPage';

const ContextFooterPage = (props) => {
    const { isMode, setIsMode } = useContext(ctx);
    const changeHandler = () => {
        setIsMode(!isMode);
    }

    return (
        <div>
            <footer>
                {/* props.isMode -> consumer로 진행햐야한다. */}
                <header style={{ 
                        backgroundColor: isMode ? 'black' : 'white'
                }}>
                    <button onClick={changeHandler}>모드 변경</button>
                </header>
            </footer>
        </div>
    );
};

export default ContextFooterPage;