"use client";

import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import { createTheme, ThemeProvider } from "@mui/material";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";

const theme = createTheme({
  palette: {
    primary: {
      main: "#39FF14",
    },
    secondary: {
      main: "#F1BE48",
    },
  },
});
export default function PositionedSnackbar() {
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const buttons = (
    <React.Fragment>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={handleClick({ vertical: "top", horizontal: "center" })}
        >
          <span className='wide-font '> </span>
        </Button>
      </Box>
      <Grid container justifyContent='center'>
        <Grid item xs={6}>
          <Button
            onClick={handleClick({ vertical: "top", horizontal: "left" })}
          >
            <span className='wide-font ml-9'> </span>
          </Button>
        </Grid>
        <Grid item xs={6} textAlign='right'>
          <Button
            onClick={handleClick({ vertical: "top", horizontal: "right" })}
          >
            <span className='wide-font mr-9'> </span>
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: 500,
          height: 200,
          borderRadius: 20,
          border: "2px solid #FFFFF",
          //   backgroundColor: "#9C9C9C",
          backgroundImage: `url("/scrat3.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom", // Adjusted background position

          padding: "5px",
          //borderImage: `url(${metalImage.src}) 20% stretch`,
          borderWidth: "4px",
          borderColor: "black",
        }}
      >
        {buttons}
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          message='I love snacks'
          key={vertical + horizontal}
        />
      </Box>
    </ThemeProvider>
  );
}
