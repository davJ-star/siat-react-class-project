import React, { createContext, useState } from 'react';

const ContextHeaderPage = (props) => {
    

    return (
        <div>
            <header style={{ 
                    backgroundColor: props.isMode ? 'black' : 'white', 
                    color: props.isMode ? 'white' : 'black' 
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