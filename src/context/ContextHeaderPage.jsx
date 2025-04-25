import React, { createContext, useState } from 'react';
import { useContext } from 'react';
import ctx from './ContextHeaderPage';

const ContextHeaderPage = (props) => {
    const { isMode } = useContext(ctx);

    return (
        <div>
            <header style={{ 
                    backgroundColor: isMode ? 'black' : 'white', 
                    color: isMode ? 'white' : 'black' 
            }}>
                <h1>Header</h1>
            </header>
        </div>
    );
};

export default ContextHeaderPage;

// Create Context
// const HeaderPageContext = createContext();

// // Provider Component
// export const HeaderPageProvider = ({ children }) => {
//     const [headerTitle, setHeaderTitle] = useState('');
//     const [headerSubtitle, setHeaderSubtitle] = useState('');

//     const updateHeader = (title, subtitle) => {
//         setHeaderTitle(title);
//         setHeaderSubtitle(subtitle);
//     };

//     return (
//         <HeaderPageContext.Provider value={{ headerTitle, headerSubtitle, updateHeader }}>
//             {children}
//         </HeaderPageContext.Provider>
//     );
// };

// export default HeaderPageContext;