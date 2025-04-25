import React, { createContext, useState } from 'react';

// Create Context
const HeaderPageContext = createContext();

// Provider Component
export const HeaderPageProvider = ({ children }) => {
    const [headerTitle, setHeaderTitle] = useState('');
    const [headerSubtitle, setHeaderSubtitle] = useState('');

    const updateHeader = (title, subtitle) => {
        setHeaderTitle(title);
        setHeaderSubtitle(subtitle);
    };

    return (
        <HeaderPageContext.Provider value={{ headerTitle, headerSubtitle, updateHeader }}>
            {children}
        </HeaderPageContext.Provider>
    );
};

export default HeaderPageContext;