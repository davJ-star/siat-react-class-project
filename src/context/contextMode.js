import React, { createContext, useState, useContext } from 'react';

// Create a Context for the mode
const ctx = createContext();
export default ctx;

// import React, { createContext, useState, useContext } from 'react';

// // Create a Context for the mode
// const ModeContext = createContext();

// // Provider component
// export const ModeProvider = ({ children }) => {
//     const [mode, setMode] = useState('light'); // Default mode is 'light'

//     const toggleMode = () => {
//         setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
//     };

//     return (
//         <ModeContext.Provider value={{ mode, toggleMode }}>
//             {children}
//         </ModeContext.Provider>
//     );
// };

// // Custom hook to use the ModeContext
// export const useMode = () => {
//     const context = useContext(ModeContext);
//     if (!context) {
//         throw new Error('useMode must be used within a ModeProvider');
//     }
//     return context;
// };