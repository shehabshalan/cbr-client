import Layout from "./components/Layout";
import CaseForm from "./components/CaseForm";
import { Box, Divider, Grid, Typography } from "@mui/material";
import About from "./components/About";
import Title from "./components/Title";
import { useState } from "react";
import Recommendation from "./components/Recommendation";
function App() {
  const [resources, setResources] = useState([]);
  return (
    <Layout>
      <Box sx={{ m: 2 }}>
        <Title />
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <CaseForm setResources={setResources} />
        </Grid>

        <Grid item xs={12} md={6}>
          <About />
          <Divider />
          {resources.length > 0 && <Recommendation data={resources} />}
        </Grid>
      </Grid>
    </Layout>
  );
}

export default App;
