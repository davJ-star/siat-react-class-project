import React, { createContext, useContext, useState } from 'react';

// Create Context
const FooterPageContext = createContext();

// Provider Component
export const FooterPageProvider = ({ children }) => {
    const [footerData, setFooterData] = useState(null);

    const updateFooterData = (data) => {
        setFooterData(data);
    };

    return (
        <FooterPageContext.Provider value={{ footerData, updateFooterData }}>
            {children}
        </FooterPageContext.Provider>
    );
};

// Custom Hook
export const useFooterPageContext = () => {
    return useContext(FooterPageContext);
};