import React, { createContext, useContext, useState } from 'react';

// Create a Context
const ContextPageContext = createContext();

// Create a Provider Component
export const ContextPageProvider = ({ children }) => {
    const [state, setState] = useState(null);

    const updateState = (newState) => {
        setState(newState);
    };

    return (
        <ContextPageContext.Provider value={{ state, updateState }}>
            {children}
        </ContextPageContext.Provider>
    );
};

// Custom Hook to use the Context
export const useContextPage = () => {
    return useContext(ContextPageContext);
};