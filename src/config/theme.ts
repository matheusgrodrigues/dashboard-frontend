'use client';

import { PaletteMode } from '@mui/material';
import { blue, blueGrey, grey } from '@mui/material/colors';

const getTheme = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                  primary: blue,
                  divider: blue[200],
                  text: {
                      primary: grey[900],
                      secondary: grey[800],
                  },
              }
            : {
                  primary: blueGrey,
                  divider: blueGrey[700],
                  background: {
                      default: blueGrey[900],
                      paper: blueGrey[900],
                  },
                  text: {
                      primary: '#fff',
                      secondary: grey[500],
                  },
              }),
    },
});

export default getTheme;
