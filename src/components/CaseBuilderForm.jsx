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
import { Alert, Autocomplete, Stack, Typography } from "@mui/material";
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
      solution_lockdown_policy_level: "",
      solution_mask_policy_level: "",
      solution_vaccine_policy_level: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      createCase(
        values,
        {
          onSuccess: () => {
            formik.resetForm();
            alert("Case created successfully!");
          },
        },
        {
          onError: () => {
            alert("Failed to create case!");
          },
        }
      );
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
      component="form"
      sx={{
        maxWidth: 900,
        margin: "auto",
        p: 4,
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
      onSubmit={formik.handleSubmit}
    >
      <Alert severity="info">
        <Typography variant="body1">
          Use the form below to build a case.
        </Typography>
      </Alert>
      <Stack direction="row" spacing={2}>
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
      <Stack direction="row" spacing={2}>
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
      <Stack direction="row" spacing={2}>
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

      <Stack direction="row" spacing={2}>
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
      <TextField
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

      <Button color="primary" variant="contained" fullWidth type="submit">
        Submit
      </Button>
    </Paper>
  );
};

export default CaseBuilderForm;
