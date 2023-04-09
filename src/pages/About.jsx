import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const About = () => {
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
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5">About</Typography>
        <Typography variant="body1">
          CBR recommender is a system that uses case-based reasoning to
          recommend policies to fight virus outbreaks specifically Covid-19. The
          system uses a case library of past outbreaks (Covid-19) to those
          policies based on what was recommended in the past.
        </Typography>
      </Box>
      <Box>
        <Typography variant="h5">How to Use</Typography>
        <Typography variant="body1">
          To use the system, fill out the form in the recommender page. The
          system will then use the information to recommend policies to fight
          the virus outbreak. The system will also provide a list of cases that
          are similar to the one you entered.
        </Typography>
      </Box>
    </Grid>
  );
};

export default About;
