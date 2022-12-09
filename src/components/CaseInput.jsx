import React from "react";
import { TextField, Grid, Box } from "@mui/material";

// make a component that can be used to generate a text field should be able to be used in a form from the parent component
//
// props:
//  - label: the label for the text field
//  - value: the value of the text field
//  - onChange: the function to call when the text field changes
//  - error: whether or not the text field has an error

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
