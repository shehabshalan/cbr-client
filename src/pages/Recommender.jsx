import { Alert, AlertTitle, Grid, Typography } from "@mui/material";
import RecommenderForm from "../components/RecommenderForm";
import { useCreateRecommendation } from "../hooks/useCreateRecommendation";
import Recommendation from "../components/Recommendation";

const Recommender = () => {
  const {
    mutate: createRecommendation,
    isLoading,
    isSuccess,
    data: recommendation,
  } = useCreateRecommendation();

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
            recommended in the past. To use the system, fill out the form below
            and click <b>"Submit"</b>.
          </Typography>
        </Alert>
      </Grid>
      {isSuccess && (
        <Grid item xs={12}>
          <Recommendation recommendation={recommendation} />
        </Grid>
      )}
      <Grid item xs={12}>
        <RecommenderForm
          createRecommendation={createRecommendation}
          isLoading={isLoading}
        />
      </Grid>
    </Grid>
  );
};

export default Recommender;
