import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
      <Box sx={{ m: 2 }}>
        <Typography variant="h5">About</Typography>
        <Typography variant="body1">
          This system is a case-based reasoning system that uses a
          knowledge-based approach to allocate resources to COVID-19 outbreaks.
          it uses a knowledge base of past outbreaks to recommend resources to
          allocate to the current outbreak.
        </Typography>
      </Box>
      <Box sx={{ m: 2 }}>
        <Typography variant="h5">How to Use</Typography>
        <Typography variant="body1">
          To use the system, fill out the form below with the information about
          the outbreak. The system will then use the information to recommend
          resources to allocate.
        </Typography>
      </Box>
      <Box sx={{ m: 2 }}>
        <Typography variant="h5">About the System</Typography>
        <Typography variant="body1">
          This system was built using React and Material-UI. The system uses
          Flask as a backend to run the case-based reasoning system. This is
          still a work in progress, so please check back later for updates.
          {/* add a link to the github repo */}
        </Typography>
      </Box>
    </div>
  );
};

export default About;
