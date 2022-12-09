import Layout from "./components/Layout";
import CaseForm from "./components/CaseForm";
import { Box, Grid } from "@mui/material";
import About from "./components/About";
import Title from "./components/Title";
function App() {
  return (
    <Layout>
      <Box sx={{ m: 2 }}>
        <Title />
      </Box>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={6}>
          <About />
        </Grid>
        <Grid item xs={12} md={6}>
          <CaseForm />
        </Grid>
      </Grid>
    </Layout>
  );
}

export default App;
