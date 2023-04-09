import { Box } from "@mui/material";
import React from "react";

const BoxBorder = (props) => {
  return (
    <Box
      sx={{
        border: 1,
        borderColor: "primary.main",
        borderRadius: 1,
        p: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mb: 2,
      }}
    >
      {props.children}
    </Box>
  );
};

export default BoxBorder;
