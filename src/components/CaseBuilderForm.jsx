import { useFormik } from "formik";
import * as Yup from "yup";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import {
  CITIES,
  LOCKDOWN_POLICIES,
  MASK_POLICIES,
  VACCINE_POLICIES,
  VACCINATED_POPULATION,
} from "../utils/constants";
import { Autocomplete, Stack } from "@mui/material";
import { useCreateCase } from "../hooks/useCreateCase";
import { useMemo } from "react";

const schema = Yup.object().shape({
  start_date: Yup.date().required("Required"),
  end_date: Yup.date().required("Required"),
  city: Yup.string().required("Required"),
  problem_start_number_of_active_cases: Yup.number().required("Required"),
  problem_start_number_of_icu_active_cases: Yup.number().required("Required"),
  problem_start_number_of_deaths: Yup.number().required("Required"),
  problem_end_number_of_active_cases: Yup.number().required("Required"),
  problem_end_number_of_icu_active_cases: Yup.number().required("Required"),
  problem_end_number_of_deaths: Yup.number().required("Required"),
  problem_vaccinated_population: Yup.string().required("Required"),
  problem_average_temperature: Yup.number().required("Required"),
  problem_average_humidity: Yup.number().required("Required"),
  solution_lockdown_policy_level: Yup.number().required("Required"),
  solution_mask_policy_level: Yup.number().required("Required"),
  solution_vaccine_policy_level: Yup.number().required("Required"),
});

const CaseBuilderForm = () => {
  const { mutate: createCase, isLoading } = useCreateCase();
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
      solution_lockdown_policy_level: "",
      solution_mask_policy_level: "",
      solution_vaccine_policy_level: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      createCase(values, {
        onSuccess: () => {
          formik.resetForm();
          alert("Case created successfully!");
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        },
        onError: () => {
          alert("Failed to create case!");
        },
      });
    },
  });

  const memoizedCities = useMemo(() => CITIES, []);
  const memoizedLockdownPolicies = useMemo(
    () =>
      LOCKDOWN_POLICIES.map((policy) => (
        <MenuItem key={policy.value} value={policy.value}>
          {policy.level}
        </MenuItem>
      )),
    []
  );
  const memoizedMaskPolicies = useMemo(
    () =>
      MASK_POLICIES.map((policy) => (
        <MenuItem key={policy.value} value={policy.value}>
          {policy.level}
        </MenuItem>
      )),
    []
  );
  const memoizedVaccinePolicies = useMemo(
    () =>
      VACCINE_POLICIES.map((policy) => (
        <MenuItem key={policy.value} value={policy.value}>
          {policy.level}
        </MenuItem>
      )),
    []
  );
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
        maxWidth: 800,
      }}
      component="form"
      onSubmit={formik.handleSubmit}
    >
      <Stack direction="row" spacing={2} mb={3}>
        <TextField
          fullWidth
          id="start_date"
          name="start_date"
          label="Start Date"
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
            label="City"
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
          label="Number of ICU Active Cases at Start"
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
          label="Number of Deaths at Start"
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
      <TextField
        sx={{ mb: 3 }}
        fullWidth
        id="solution_lockdown_policy_level"
        name="solution_lockdown_policy_level"
        label="Lockdown Policy"
        select
        value={formik.values.solution_lockdown_policy_level}
        onChange={formik.handleChange}
        error={
          formik.touched.solution_lockdown_policy_level &&
          Boolean(formik.errors.solution_lockdown_policy_level)
        }
        helperText={
          formik.touched.solution_lockdown_policy_level &&
          formik.errors.solution_lockdown_policy_level
        }
      >
        {memoizedLockdownPolicies}
      </TextField>

      <TextField
        sx={{ mb: 3 }}
        fullWidth
        id="solution_mask_policy_level"
        name="solution_mask_policy_level"
        label="Mask Policy"
        select
        value={formik.values.solution_mask_policy_level}
        onChange={formik.handleChange}
        error={
          formik.touched.solution_mask_policy_level &&
          Boolean(formik.errors.solution_mask_policy_level)
        }
        helperText={
          formik.touched.solution_mask_policy_level &&
          formik.errors.solution_mask_policy_level
        }
      >
        {memoizedMaskPolicies}
      </TextField>

      <TextField
        sx={{ mb: 3 }}
        fullWidth
        id="solution_vaccine_policy_level"
        name="solution_vaccine_policy_level"
        label="Vaccination Policy"
        select
        value={formik.values.solution_vaccine_policy_level}
        onChange={formik.handleChange}
        error={
          formik.touched.solution_vaccine_policy_level &&
          Boolean(formik.errors.solution_vaccine_policy_level)
        }
        helperText={
          formik.touched.solution_vaccine_policy_level &&
          formik.errors.solution_vaccine_policy_level
        }
      >
        {memoizedVaccinePolicies}
      </TextField>

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

export default CaseBuilderForm;
