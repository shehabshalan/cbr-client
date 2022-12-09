import React from "react";
import { TextField, Grid, Box } from "@mui/material";

const CaseInput = ({ label, value, onChange, name }) => {
  return (
    <Grid item xs={12}>
      <Box sx={{ m: 1 }}>
        <TextField
          label={label}
          value={value}
          onChange={onChange}
          name={label}
          fullWidth
        />
      </Box>
    </Grid>
  );
};

export default CaseInput;
