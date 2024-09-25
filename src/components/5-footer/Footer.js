import { Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import SocialLinksCom from "../SocialLinksCom";
export default function Footer() {
  const theme = useTheme();
  return (
    <Stack
      direction={{ md: "row", sm: "column", xs: "column" }}
      justifyContent={"space-between"}
      alignItems={"center"}
      pb={4}
      gap={2}
    >
      <Typography fontWeight={"bold"} variant="h5" color="text.secondary">
        Contact Information : <br /> <SocialLinksCom />
      </Typography>

      <Typography variant="body1" sx={{ textAlign: "center" }}>
        Copyright © 2025
        <span
          style={{
            color: "rgb(20 184 166)",
            fontWeight: "bold",
            margin: "0 3px",
          }}
        >
          Ahmed Gamhody
        </span>
        All Rights Reserved.
      </Typography>
    </Stack>
  );
}
