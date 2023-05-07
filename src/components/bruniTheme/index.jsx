import { createTheme, ThemeProvider } from "@mui/material/styles";

const bruniDefaultColor = "#75487f";
const bruniDefaultWidth = 1920;
const bruniDefaultFont = "'Amatic SC', cursive";

const theme = createTheme({
  defaultWidth: {
    width: bruniDefaultWidth,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          // backgroundColor: bruniDefaultColor,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#E1C3F4",
          // color: "#343434",
          // color: bruniDefaultColor,
          span: {
            backgroundColor: "#E1C3F4",
          }
        },
        h1: {
          fontWeight: "normal",
        },
        a: {
          backgroundColor: "#E1C3F4",
        }
      },
    },
    MuiInputLabelRoot: {
      styleOverrides: {
        root: {
          color: bruniDefaultColor,
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          display: "flex",
          justifyContent: "space-between",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: bruniDefaultFont,
          fontWeight: "normal",
          textAlign: "center",
          // color: "#343434",
        },
        h1: {
          fontWeight: "normal",
        }
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          width: "200px",
          margin: "auto",
          paddingBottom: "134px",
        },
      }
    },
  },
});

export const BruniTheme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};