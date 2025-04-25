import React, { createContext, useContext, useReducer } from 'react';

// Create Context
const AppContext = createContext();

// // Initial State
// const initialState = {
//     user: null,
//     theme: 'light',
// };

// // Reducer Function
// const appReducer = (state, action) => {
//     switch (action.type) {
//         case 'SET_USER':
//             return { ...state, user: action.payload };
//         case 'TOGGLE_THEME':
//             return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
//         default:
//             return state;
//     }
// };

// Context Provider Component
export const ContextAppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

// Custom Hook to Use Context
export const useContextApp = () => {
    return useContext(AppContext);
};