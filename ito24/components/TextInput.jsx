"use client";

import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AccountCircle from "@mui/icons-material/AccountCircle";

const TextInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [response, setResponse] = useState("");

  const handleSend = async () => {
    const response = await fetch(`http://localhost:8080/`, {
      method: "POST",

      headers: {
        "Content-Type": "text/plain",
      },

      body: inputValue,
    });

    const responseJson = await response.json();

    setResponse(responseJson);
    return responseJson;
  };
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#00000",
        secondary: "#FFFFFF",
      },
      secondary: {
        main: "#00FF41",
        dark: false,
        light: true,
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <FormControl variant='standard' style={{ color: "#FFFFFF" }}>
          <InputLabel htmlFor='input-with-icon-adornment'>
            <Typography component='div' color='#000000'>
              {"Enter email to sign up for eNews"}
            </Typography>
          </InputLabel>
          <Input
            style={{ color: "#000000" }}
            onChange={handleInputChange}
            value={inputValue}
            id='input-with-icon-adornment'
            startAdornment={
              <InputAdornment
                position='start'
                style={{ color: "#00FF41" }}
              ></InputAdornment>
            }
          />
        </FormControl>
        <span className='m-2' />
        <Button
          onClick={handleSend}
          variant='contained'
          endIcon={<SendIcon style={{ color: "#000000" }} />}
        >
          <Typography component='div' color='#000000'>
            Send
          </Typography>
        </Button>
      </ThemeProvider>
      <div> {response} </div>
    </>
  );
};

export default TextInput;
