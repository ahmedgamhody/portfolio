import { Box, Container, CssBaseline, useTheme } from "@mui/material";
import React from "react";
import Header from "./../components/1-header/Header";
import { Outlet } from "react-router-dom";

export default function Website() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: theme.palette.bodyBackground[theme.palette.mode],
      }}
    >
      <CssBaseline />
      <Container>
        <CssBaseline />
        <Header />
        <Outlet />
      </Container>
    </Box>
  );
}
