import React, { createContext, useContext, useReducer, useState } from 'react';
import ContextPage from '../pages/ContextPage';
import ctx from './contextMode';

const ContextApp = () => {
    const [ismode, setIsMode] = useState(false);
    return (
        <div>
            <ctx.Provider value={{ ismode, setIsMode }}>
                <ContextPage />
            </ctx.Provider>
                <h1>Context App</h1>

            {/* <h1>Context App</h1>
            <ContextPage isMode={ismode} setIsMode={setIsMode} /> */}
        </div>
    );
};
export default ContextApp;



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
// export const ContextAppProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(appReducer, initialState);

//     return (
//         <AppContext.Provider value={{ state, dispatch }}>
//             {children}
//         </AppContext.Provider>
//     );
// };

// // Custom Hook to Use Context
// export const useContextApp = () => {
//     return useContext(AppContext);
// };