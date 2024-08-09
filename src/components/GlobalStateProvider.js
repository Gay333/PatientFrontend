import React, { createContext, useState } from 'react';

// Create a context
export const GlobalStateContext = createContext();

// Create a provider component
export const GlobalStateProvider = ({ children }) => {
    const [globalVariable, setGlobalVariable] = useState(-1);

    return (
        <GlobalStateContext.Provider value={{ globalVariable, setGlobalVariable }}>
            {children}
        </GlobalStateContext.Provider>
    );
};
