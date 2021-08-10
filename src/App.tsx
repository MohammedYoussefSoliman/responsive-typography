import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { fluidTheme, responsivetheme } from "./global/themes";
import "./app.scss";
import { Grid } from "./global/styles";
import Card from "./components/card";
import CssBaseline from "@material-ui/core/CssBaseline";

// Responsive typography
// Fluid typography

function App() {
  const [typography, setTypography] = React.useState<"responsive" | "fluid">(
    "responsive"
  );
  return (
    <>
      <ThemeProvider
        theme={typography === "responsive" ? responsivetheme : fluidTheme}
      >
        <CssBaseline />
        <div className="App">
          <div className="button--container">
            <button
              className={`button ${
                typography === "responsive" ? "active" : null
              }`}
              onClick={() => setTypography("responsive")}
            >
              responsive Typography
            </button>
            <button
              className={`button ${typography === "fluid" ? "active" : null}`}
              onClick={() => setTypography("fluid")}
            >
              fluid Typography
            </button>
          </div>
          <Grid gap={2}>
            <Card typography={typography} />
            <Card typography={typography} />
            <Card typography={typography} />
            <Card typography={typography} />
            <Card typography={typography} />
          </Grid>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
