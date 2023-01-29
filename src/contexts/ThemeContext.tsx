import { createContext, useContext, useState } from "react";
import { IThemeContext } from "./type";
import { ReactNode } from "react";
const ThemeContext = createContext<IThemeContext>({
    dark: false,
    toggleDark: () => {}
})


const ThemeProvider = (props:{children:ReactNode}) => {
    const [dark, setDark] = useState(false)
    const toggleDark = () => {
        setDark( !dark )
    }
    return (
        <ThemeContext.Provider value={{
            dark,
            toggleDark,
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)
export default ThemeProvider