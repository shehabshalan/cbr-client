import { useFormik } from "formik";
import * as Yup from "yup";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { CITIES, VACCINATED_POPULATION } from "../utils/constants";
import MenuItem from "@mui/material/MenuItem";
import { Autocomplete, Stack } from "@mui/material";
import { useMemo } from "react";

const schema = Yup.object().shape({
  start_date: Yup.date().required("Required"),
  city: Yup.string().required("Required"),
  problem_start_number_of_active_cases: Yup.number().required("Required"),
  problem_start_number_of_icu_active_cases: Yup.number().required("Required"),
  problem_start_number_of_deaths: Yup.number().required("Required"),
});

const RecommenderForm = ({ createRecommendation, isLoading }) => {
  const formik = useFormik({
    initialValues: {
      start_date: "",
      end_date: "",
      city: "",
      problem_start_number_of_active_cases: "",
      problem_start_number_of_icu_active_cases: "",
      problem_start_number_of_deaths: "",
      problem_end_number_of_active_cases: "",
      problem_end_number_of_icu_active_cases: "",
      problem_end_number_of_deaths: "",
      problem_vaccinated_population: "",
      problem_average_temperature: "",
      problem_average_humidity: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      createRecommendation(values, {
        onSuccess: () => {
          formik.resetForm();
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        },
        onError: () => {
          alert("Failed to create a recommendation!");
        },
      });
    },
  });

  const memoizedCities = useMemo(() => CITIES, []);
  const memoizedVaccinatedPopulation = useMemo(
    () =>
      VACCINATED_POPULATION.map((policy) => (
        <MenuItem key={policy.value} value={policy.value}>
          {policy.level}
        </MenuItem>
      )),
    []
  );
  return (
    <Paper
      sx={{
        p: 4,
      }}
      component="form"
      onSubmit={formik.handleSubmit}
    >
      <Stack direction="row" spacing={2} mb={3}>
        <TextField
          fullWidth
          id="start_date"
          name="start_date"
          label="Start Date (Required)"
          focused
          type="date"
          value={formik.values.start_date}
          onChange={formik.handleChange}
          error={formik.touched.start_date && Boolean(formik.errors.start_date)}
          helperText={formik.touched.start_date && formik.errors.start_date}
        />
        <TextField
          fullWidth
          id="end_date"
          focused
          name="end_date"
          label="End Date"
          type="date"
          value={formik.values.end_date}
          onChange={formik.handleChange}
          error={formik.touched.end_date && Boolean(formik.errors.end_date)}
          helperText={formik.touched.end_date && formik.errors.end_date}
        />
      </Stack>
      <Autocomplete
        sx={{ mb: 3 }}
        id="city"
        name="city"
        options={memoizedCities}
        getOptionLabel={(option) => option}
        renderInput={(params) => (
          <TextField
            {...params}
            label="City (Required)"
            value={formik.values.city}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
          />
        )}
        onChange={(_, value) => formik.setFieldValue("city", value)}
      />
      <Stack direction="row" spacing={2} mb={3}>
        <TextField
          fullWidth
          id="problem_start_number_of_active_cases"
          name="problem_start_number_of_active_cases"
          label="Number of Active Cases at Start"
          type="number"
          value={formik.values.problem_start_number_of_active_cases}
          onChange={formik.handleChange}
          error={
            formik.touched.problem_start_number_of_active_cases &&
            Boolean(formik.errors.problem_start_number_of_active_cases)
          }
          helperText={
            formik.touched.problem_start_number_of_active_cases &&
            formik.errors.problem_start_number_of_active_cases
          }
        />
        <TextField
          fullWidth
          id="problem_end_number_of_active_cases"
          name="problem_end_number_of_active_cases"
          label="Number of Active Cases at End"
          type="number"
          value={formik.values.problem_end_number_of_active_cases}
          onChange={formik.handleChange}
          error={
            formik.touched.problem_end_number_of_active_cases &&
            Boolean(formik.errors.problem_end_number_of_active_cases)
          }
          helperText={
            formik.touched.problem_end_number_of_active_cases &&
            formik.errors.problem_end_number_of_active_cases
          }
        />
      </Stack>
      <Stack direction="row" spacing={2} mb={3}>
        <TextField
          fullWidth
          id="problem_start_number_of_icu_active_cases"
          name="problem_start_number_of_icu_active_cases"
          label="Number of ICU Active Cases at Start (Required)"
          type="number"
          value={formik.values.problem_start_number_of_icu_active_cases}
          onChange={formik.handleChange}
          error={
            formik.touched.problem_start_number_of_icu_active_cases &&
            Boolean(formik.errors.problem_start_number_of_icu_active_cases)
          }
          helperText={
            formik.touched.problem_start_number_of_icu_active_cases &&
            formik.errors.problem_start_number_of_icu_active_cases
          }
        />
        <TextField
          fullWidth
          id="problem_end_number_of_icu_active_cases"
          name="problem_end_number_of_icu_active_cases"
          label="Number of ICU Active Cases at End"
          type="number"
          value={formik.values.problem_end_number_of_icu_active_cases}
          onChange={formik.handleChange}
          error={
            formik.touched.problem_end_number_of_icu_active_cases &&
            Boolean(formik.errors.problem_end_number_of_icu_active_cases)
          }
          helperText={
            formik.touched.problem_end_number_of_icu_active_cases &&
            formik.errors.problem_end_number_of_icu_active_cases
          }
        />
      </Stack>

      <Stack direction="row" spacing={2} mb={3}>
        <TextField
          fullWidth
          id="problem_start_number_of_deaths"
          name="problem_start_number_of_deaths"
          label="Number of Deaths at Start (Required)"
          type="number"
          value={formik.values.problem_start_number_of_deaths}
          onChange={formik.handleChange}
          error={
            formik.touched.problem_start_number_of_deaths &&
            Boolean(formik.errors.problem_start_number_of_deaths)
          }
          helperText={
            formik.touched.problem_start_number_of_deaths &&
            formik.errors.problem_start_number_of_deaths
          }
        />
        <TextField
          fullWidth
          id="problem_end_number_of_deaths"
          name="problem_end_number_of_deaths"
          label="Number of Deaths at End"
          type="number"
          value={formik.values.problem_end_number_of_deaths}
          onChange={formik.handleChange}
          error={
            formik.touched.problem_end_number_of_deaths &&
            Boolean(formik.errors.problem_end_number_of_deaths)
          }
          helperText={
            formik.touched.problem_end_number_of_deaths &&
            formik.errors.problem_end_number_of_deaths
          }
        />
      </Stack>
      <TextField
        sx={{ mb: 3 }}
        fullWidth
        id="problem_vaccinated_population"
        name="problem_vaccinated_population"
        label="Vaccinated Population"
        select
        value={formik.values.problem_vaccinated_population}
        onChange={formik.handleChange}
        error={
          formik.touched.problem_vaccinated_population &&
          Boolean(formik.errors.problem_vaccinated_population)
        }
        helperText={
          formik.touched.problem_vaccinated_population &&
          formik.errors.problem_vaccinated_population
        }
      >
        {memoizedVaccinatedPopulation}
      </TextField>
      <Stack direction="row" spacing={2} mb={3}>
        <TextField
          sx={{ mb: 3 }}
          fullWidth
          id="problem_average_temperature"
          name="problem_average_temperature"
          label="Average Temperature (Celsius) During Selected Period"
          type="number"
          value={formik.values.problem_average_temperature}
          onChange={formik.handleChange}
          error={
            formik.touched.problem_average_temperature &&
            Boolean(formik.errors.problem_average_temperature)
          }
          helperText={
            formik.touched.problem_average_temperature &&
            formik.errors.problem_average_temperature
          }
        />
        <TextField
          sx={{ mb: 3 }}
          fullWidth
          id="problem_average_humidity"
          name="problem_average_humidity"
          label="Average Humidity (%) During Selected Period"
          type="number"
          value={formik.values.problem_average_humidity}
          onChange={formik.handleChange}
          error={
            formik.touched.problem_average_humidity &&
            Boolean(formik.errors.problem_average_humidity)
          }
          helperText={
            formik.touched.problem_average_humidity &&
            formik.errors.problem_average_humidity
          }
        />
      </Stack>
      <Button
        color="primary"
        variant="contained"
        fullWidth
        type="submit"
        disabled={isLoading}
      >
        Submit
      </Button>
    </Paper>
  );
};

export default RecommenderForm;
