import { Alert, AlertTitle, Grid, Typography } from "@mui/material";
import React from "react";
import CasesTable from "../components/CasesTable";

const Library = () => {
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      sx={{
        maxWidth: 1200,
        margin: "auto",
      }}
    >
      <Grid item xs={12}>
        <Alert severity="info">
          <AlertTitle>Case Library</AlertTitle>

          <Typography variant="body1" align="justify">
            The case library is the accumulated knowledge which the system uses
            to make recommendations. The table below shows the cases in the
            library. The cases are sorted by the date they were added to the
            library.
          </Typography>
        </Alert>
      </Grid>
      <Grid item xs={12}>
        <CasesTable />
      </Grid>
    </Grid>
  );
};

export default Library;
