import React, { createContext, useState, ReactNode } from 'react';

interface ContextProps {
    darkMode: string;
    toggleDarkMode: () => void;
}

interface AppProviderProps {
    children: ReactNode;
}

const AppContext = createContext<ContextProps>({
    darkMode: 'light',
    toggleDarkMode: () => {},
});

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [darkMode, setDarkMode] = useState('light');

    const toggleDarkMode = () => {
        setDarkMode(darkMode === 'light' ? 'dark' : 'light');
    };

    return (
        <AppContext.Provider
            value={{
                darkMode,
                toggleDarkMode,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
