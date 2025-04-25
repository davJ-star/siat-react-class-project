import React, { createContext, useContext, useState } from 'react';

// Create Context
const BodyPageContext = createContext();

// Context Provider Component
export const BodyPageProvider = ({ children }) => {
    const [state, setState] = useState({
        // Add your initial state here
        exampleKey: 'exampleValue',
    });

    const updateState = (key, value) => {
        setState((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };

    return (
        <BodyPageContext.Provider value={{ state, updateState }}>
            {children}
        </BodyPageContext.Provider>
    );
};

// Custom Hook to use the Context
export const useBodyPageContext = () => {
    const context = useContext(BodyPageContext);
    if (!context) {
        throw new Error('useBodyPageContext must be used within a BodyPageProvider');
    }
    return context;
};