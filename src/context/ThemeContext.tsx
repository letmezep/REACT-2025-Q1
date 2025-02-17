import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
    theme: 'light',
    changeTheme: () => { },
});

export const ThemeProvider = ({ children }: any) => {
    const [theme, setTheme] = useState('light');
    const changeTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };


    useEffect(() => {
        document.body.style.backgroundColor = theme === 'light' ? '#FFF' : '#333';
        document.body.style.color = theme === 'light' ? '#000' : '#FFF';
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
