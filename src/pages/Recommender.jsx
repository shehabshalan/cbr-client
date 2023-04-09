import { Alert, AlertTitle, Grid, Typography } from "@mui/material";
import RecommenderForm from "../components/RecommenderForm";

const Recommender = () => {
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
          <AlertTitle>Recommender</AlertTitle>

          <Typography variant="body1" align="justify">
            The recommender uses case-based reasoning to recommend policies to
            fight virus outbreaks. The system uses a case library of past
            outbreaks (Covid-19) to recommend policies based on what was
            recommended in the past.
          </Typography>
        </Alert>
      </Grid>
      <Grid item xs={12}>
        <RecommenderForm />
      </Grid>
    </Grid>
  );
};

export default Recommender;
