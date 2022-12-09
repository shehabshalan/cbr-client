import React from "react";
import CaseInput from "./CaseInput";
import { Button, Grid, Box } from "@mui/material";
const CaseForm = () => {
  const field_labels = [
    "Rank Risk of Incident",
    "Transmission Routes",
    "Symptoms",
    "Pathological Characteristics",
    "Average Quarantine Period",
    "Infection Ratio",
    "Number of Infected",
    "Fatality Ratio",
    "Number of Deaths",
  ];
  const [form, setForm] = React.useState({
    RRI: "",
    TR: "",
    SP: "",
    PC: "",
    AQP: "",
    IR: "",
    NI: "",
    FR: "",
    ND: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        {Object.keys(form).map((key) => (
          <CaseInput
            key={key}
            label={key}
            value={form[key]}
            onChange={handleChange}
          />
        ))}

        <Grid item xs={12}>
          <Box sx={{ m: 1 }}>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

export default CaseForm;
