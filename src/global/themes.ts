import { createTheme } from "@material-ui/core";

export const fluidTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          h1: {
            fontSize:
              "calc(2.25rem + (((100vw - 20rem) / (90 - 20))) * (4.75 - 2.25))",
          },
          h2: {
            fontSize:
              "calc(1.6rem + (((100vw - 20rem) / (90 - 20))) * (3.8 - 1.6))",
          },
          p: {
            fontSize: "calc(1rem + (((100vw - 20rem) / (90 - 20))) * (3 - 1))",
          },
          span: {
            fontSize: "calc(1rem + (((100vw - 20rem) / (90 - 20))) * (3 - 1))",
          },
        },
      },
    },
  },
});

export const responsivetheme = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          "@media screen and (min-width: 1820px)": {
            fontSize: "21px !important",
          },
          "@media screen and (max-width: 1366px)": {
            fontSize: "16px !important",
          },
          "@media screen and (max-width: 560px)": {
            fontSize: "10px !important",
          },
        },
      },
    },
  },
});
