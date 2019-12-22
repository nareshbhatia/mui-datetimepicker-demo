import React from 'react';
import MomentUtils from '@date-io/moment';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { HomePage } from './HomePage';
import { theme } from './theme';

export const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <CssBaseline />
                <HomePage />
            </MuiPickersUtilsProvider>
        </ThemeProvider>
    );
};
