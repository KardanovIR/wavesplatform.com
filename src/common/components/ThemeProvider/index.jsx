import React from 'react';



// body styles
import { base } from '../../theme/typography';
import theme, { typeface } from '../../theme';

// typography
import injectSheet, { ThemeProvider } from 'react-jss';



// global styles
const styles = {
    ...typeface,
    // '@global body': {
        // ...base,
        // margin: 0,
        // padding: 0
    // }
}



const CustomThemeProvider = props => (
    <ThemeProvider theme={theme} { ...props } />
)


export default injectSheet(styles)(CustomThemeProvider);