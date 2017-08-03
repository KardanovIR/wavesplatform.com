import React from 'react';

import Layout from '../../components/Layout';

// body styles
import { base } from '../../theme/typography';
import theme, { typeface } from '../../theme';

// typography
import injectSheet, { ThemeProvider } from 'react-jss';



const styles = {
    ...typeface,
    '@global body': base,
}


const Page = () => (
    <ThemeProvider theme={theme}>
        <Layout>
            <div>
                Главная страница
            </div>
        </Layout>
    </ThemeProvider>

)


export default injectSheet(styles)(Page);