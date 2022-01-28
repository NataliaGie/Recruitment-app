import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        mainBlue: "rgb(30,141,206)",
        darkenBlue: "rgb(30,129,187)"
    }
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;