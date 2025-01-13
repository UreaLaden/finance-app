import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--grey-900)",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--grey-500)",
          },
        },
        input: {
          padding: "0.5em 0.5em 0.5em 12px",
          "::placeholder": {
            color: "var(--beige-500)",
            fontSize: "var(--font-size-medium)",
            lineHeight: "var(--line-height-normal)",
          },
        },
        notchedOutline: {
          borderRadius: "8px",
          borderColor: "var(--beige-500)",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          textAlign: "end",
          marginRight: 0,
          fontWeight: "normal",
          lineHeight: "var(--line-height-normal)",
          fontSize: "var(--font-size-small)",
          color: "var(--grey-500)",
          "&.Mui-error": {
            color: "var(--red-primary)",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontWeight: "bold",
          lineHeight: "150%",
          fontSize: "var(--font-size-small)",
          color: "var(--grey-500)",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          padding: ".5em 0",
          margin: "0 1em",
        },
        divider: {
          borderColor: "var(--grey-100)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontSize: "var(--font-size-small)",
          fontWeight: "bold",
          padding: "1em 1.25em",
          boxShadow: "none",
          borderRadius: "8px",
        },
        containedPrimary: {
          backgroundColor: "var(--grey-900)",
          color: "var(--white)",
          "&:hover": {
            backgroundColor: "var(--grey-500)",
            borderRadius: "8px",
            boxShadow: "none",
          },
        },
        containedSecondary: {
          backgroundColor: "var(--beige-100)",
          color: "var(--grey-900)",
          "&:hover": {
            backgroundColor: "var(--white)",
            border: "1px solid var(--grey-500)",
            borderRadius: "8px",
            boxShadow: "none",
          },
        },
        containedError: {
          backgroundColor: "var(--red-primary)",
          "&:hover": {
            filter: "brightness(1.1)",
            backgroundColor: "var(--red-primary)",
            boxShadow: "none",
          },
        },
        text: {
          color: "var(--grey-500)",
          "&:hover": {
            color: "var(--grey-900)",
            backgroundColor: "transparent",
            boxShadow: "none",
            "svg path": {
              fill: "var(--grey-900)",
            },
          },
        },
        endIcon: {
          transform: "scale(.75)",
        },
      },
    },
  },
});
