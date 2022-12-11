import React, { useState } from "react";
import CaseInput from "./CaseInput";
import { Grid, Box } from "@mui/material";
import { LoadingButton } from "@mui/lab";

const field_labels = [
  "Rank Risk of Incident (RRI)",
  "Transmission Routes (TR)",
  "Symptoms (SP)",
  "Pathological Characteristics (PC)",
  "Average Quarantine Period (AQP)",
  "Infection Ratio (IR)",
  "Number of Infected (NI)",
  "Fatality Ratio (FR)",
  "Number of Deaths (ND)",
];
const CaseForm = ({ setResources }) => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
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
    setForm({ ...form, [e.target.name]: Number(e.target.value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch("https://sudan.pythonanywhere.com/knn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setResources(data.KNN);
        setLoading(false);
      })
      .catch((err) => {
        alert("Error: " + err.message);

        setLoading(false);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        {Object.keys(form).map((key, index) => (
          <CaseInput
            label={field_labels[index]}
            value={form[key]}
            onChange={handleChange}
            name={key}
            key={key}
          />
        ))}

        <Grid item xs={12}>
          <Box sx={{ m: 1 }}>
            <LoadingButton type="submit" variant="contained" loading={loading}>
              Submit
            </LoadingButton>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

export default CaseForm;
