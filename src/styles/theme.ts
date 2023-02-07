import { createTheme } from '@nextui-org/react';

export const defaultTheme = createTheme({
    type: 'light',
    className: 'default-theme',
    theme: {
        fonts: {
            orbitron: 'var(--font-orbitron)'
        }
    }
});

export const theme = {
    defaultTheme: 'light',
    enableColorScheme: false,
    value: {
        light: defaultTheme.className
    }
};