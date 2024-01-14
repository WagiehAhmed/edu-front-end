import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material"


export const colors = {
    primary: "#1976D2", 
    textPrimary: "#15284F",
    // textSecondary: "#989696",
    textSecondary: "#E5E7E4",
    iconContainer: "#F0EEEF",
    white:"#FFFFFF",
    black:"#3D3D3D",
    gray:"#959595",
    green:"#79BB59",
}

export const theme = createTheme({
    palette:{  
     mode:"light",
    }
});

const CustomThemeProvider = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    );
}

export default CustomThemeProvider;
