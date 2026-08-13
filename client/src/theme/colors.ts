export const colors = {
  primary: {
    purpleDark: '#5B2D91',
    purple: '#7237BC',
    greyPurple: '#604B7E',
    purpleLight: '#8C52FF',
  },
  secondary: {
    magenta: '#CB6CE6',
    mauve: '#CEA8F0',
    brightPurple: '#8F1EAE',
    amethyst: '#B174E7',
  },
  neutral: {
    black: '#000000',
    white: '#FFFFFF',
    grey: '#B4B4B4',
    darkBlue: '#0B1F3A',
    eggplant: '#2C0A71',
  },
} as const;

export type ColorTheme = typeof colors;
