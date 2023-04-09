import { Alert, AlertTitle, Grid, Typography } from "@mui/material";
import CaseBuilderForm from "../components/CaseBuilderForm";

const Builder = () => {
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      sx={{
        maxWidth: 800,
        margin: "auto",
      }}
    >
      <Grid item xs={12}>
        <Alert severity="info">
          <AlertTitle>Case Builder</AlertTitle>

          <Typography variant="body1" align="justify">
            The case builder allows you to create a case which will be stored in
            the case library. The case library is the accumulated knowledge
            which the system uses to make recommendations. Use the form to build
            a case and then click the
            <b> "Submit"</b> button to add the case to the library.
          </Typography>
        </Alert>
      </Grid>
      <Grid item xs={12}>
        <CaseBuilderForm />
      </Grid>
    </Grid>
  );
};

export default Builder;
