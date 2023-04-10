import { useGetCases } from "../hooks/useGetCases";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Tooltip,
  Button,
} from "@mui/material";
import {
  VACCINATED_POPULATION,
  LOCKDOWN_POLICIES,
  MASK_POLICIES,
  VACCINE_POLICIES,
  POPULATION_DENSITY,
  MEDIAN_AGE_DISTRIBUTION,
} from "../utils/constants";
import { findLevel } from "../utils/findLevel";
const CasesTable = () => {
  const { data: cases, isLoading, isError } = useGetCases();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  if (cases.length === 0) {
    return <div>No cases found</div>;
  }

  console.log();
  return (
    <TableContainer
      component={Paper}
      sx={{
        maxWidth: 1200,
      }}
    >
      <Table
        aria-label="cases table"
        sx={{
          width: "max-content",
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>Case ID</TableCell>
            <TableCell align="right">Start Date</TableCell>
            <TableCell align="right">End Date</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">Population</TableCell>
            <TableCell align="right">Population Density</TableCell>
            <TableCell align="right">Age Distribution</TableCell>
            <TableCell align="right">Problem Description</TableCell>
            <TableCell align="right">Number of Active Cases at Start</TableCell>
            <TableCell align="right">Number of Active Cases at End</TableCell>
            <TableCell align="right">
              Number of ICU Active Cases at Start
            </TableCell>
            <TableCell align="right">
              Number of ICU Active Cases at End
            </TableCell>
            <TableCell align="right">Number of Deaths at Start</TableCell>
            <TableCell align="right">Number of Deaths at End</TableCell>
            <TableCell align="right">Vaccinated Population</TableCell>
            <TableCell align="right">Infection Rate</TableCell>
            <TableCell align="right">Mortality Rate</TableCell>
            <TableCell align="right">Solution Description</TableCell>
            <TableCell align="right">Lockdown Policy</TableCell>
            <TableCell align="right">Mask Policy</TableCell>
            <TableCell align="right">Vaccination Policy</TableCell>
            <TableCell align="right">Solution Effectiveness</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cases.map((row) => (
            <TableRow
              key={row.case_id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.start_date}</TableCell>
              <TableCell align="right">{row.end_date}</TableCell>
              <TableCell align="right">{row.city}</TableCell>
              <TableCell align="right">{row.problem_population}</TableCell>
              <TableCell align="right">
                {findLevel(POPULATION_DENSITY, row?.problem_population_density)}
              </TableCell>
              <TableCell align="right">
                {findLevel(
                  MEDIAN_AGE_DISTRIBUTION,
                  row?.problem_age_distribution
                )}
              </TableCell>
              <TableCell align="right">
                <Tooltip title={row.problem_description} disableInteractive>
                  <Button>View</Button>
                </Tooltip>
              </TableCell>
              <TableCell align="right">
                {row.problem_start_number_of_active_cases}
              </TableCell>
              <TableCell align="right">
                {row.problem_end_number_of_active_cases}
              </TableCell>
              <TableCell align="right">
                {row.problem_start_number_of_icu_active_cases}
              </TableCell>
              <TableCell align="right">
                {row.problem_end_number_of_icu_active_cases}
              </TableCell>
              <TableCell align="right">
                {row.problem_start_number_of_deaths}
              </TableCell>
              <TableCell align="right">
                {row.problem_end_number_of_deaths}
              </TableCell>

              <TableCell align="right">
                {findLevel(
                  VACCINATED_POPULATION,
                  row?.problem_vaccinated_population
                )}
              </TableCell>
              <TableCell align="right">{row.problem_infection_rate}</TableCell>
              <TableCell align="right">{row.problem_mortality_rate}</TableCell>
              <TableCell align="right">
                <Tooltip title={row.solution_description} disableInteractive>
                  <Button>View</Button>
                </Tooltip>
              </TableCell>
              <TableCell align="right">
                <Tooltip
                  title={findLevel(
                    LOCKDOWN_POLICIES,
                    row?.solution_lockdown_policy_level
                  )}
                  disableInteractive
                >
                  <Button>{row.solution_lockdown_policy_level}</Button>
                </Tooltip>
              </TableCell>
              <TableCell align="right">
                <Tooltip
                  title={findLevel(
                    MASK_POLICIES,
                    row?.solution_mask_policy_level
                  )}
                  disableInteractive
                >
                  <Button>{row.solution_mask_policy_level}</Button>
                </Tooltip>
              </TableCell>
              <TableCell align="right">
                <Tooltip
                  title={findLevel(
                    VACCINE_POLICIES,
                    row?.solution_vaccine_policy_level
                  )}
                  disableInteractive
                >
                  <Button>{row.solution_vaccine_policy_level}</Button>
                </Tooltip>
              </TableCell>
              <TableCell align="right">{row.solution_effectiveness}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CasesTable;
