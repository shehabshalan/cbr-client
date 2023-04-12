import React from "react";
import { Alert, AlertTitle, Typography } from "@mui/material";
const Recommendation = ({ recommendation }) => {
  return (
    <Alert severity="success">
      <AlertTitle>Recommendation</AlertTitle>
      <Typography variant="body1" align="justify">
        {recommendation.data}
      </Typography>
    </Alert>
  );
};

export default Recommendation;
