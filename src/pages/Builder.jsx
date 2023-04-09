import { Box, Typography } from "@mui/material";
import CaseBuilderForm from "../components/CaseBuilderForm";

const Builder = () => {
  return (
    <Box>
      <Box>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Case Builder
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          The case builder allows you to create a case to be used in the
          recommender system.
        </Typography>
      </Box>
      <CaseBuilderForm />
    </Box>
  );
};

export default Builder;
