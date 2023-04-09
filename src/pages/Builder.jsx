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

const Builder = () => {
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
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Paper
      component="form"
      sx={{
        maxWidth: 800,
        margin: "auto",
        p: 2,
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
      onSubmit={formik.handleSubmit}
    >
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
        options={CITIES}
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

      {/* <TextField
        fullWidth
        id="city"
        name="city"
        label="City"
        select
        value={formik.values.city}
        onChange={formik.handleChange}
        error={formik.touched.city && Boolean(formik.errors.city)}
        helperText={formik.touched.city && formik.errors.city}
      >
        {CITIES.map((city) => (
          <MenuItem key={city} value={city}>
            {city}
          </MenuItem>
        ))}
      </TextField> */}
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
        {VACCINATED_POPULATION.map((vaccinated_population) => (
          <MenuItem key={vaccinated_population} value={vaccinated_population}>
            {vaccinated_population}
          </MenuItem>
        ))}
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
        {LOCKDOWN_POLICIES.map((lockdown_policy) => (
          <MenuItem key={lockdown_policy} value={lockdown_policy}>
            {lockdown_policy}
          </MenuItem>
        ))}
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
        {MASK_POLICIES.map((mask_policy) => (
          <MenuItem key={mask_policy} value={mask_policy}>
            {mask_policy}
          </MenuItem>
        ))}
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
        {VACCINE_POLICIES.map((vaccination_policy) => (
          <MenuItem key={vaccination_policy} value={vaccination_policy}>
            {vaccination_policy}
          </MenuItem>
        ))}
      </TextField>

      <Button color="primary" variant="contained" fullWidth type="submit">
        Submit
      </Button>
    </Paper>
  );
};

export default Builder;
