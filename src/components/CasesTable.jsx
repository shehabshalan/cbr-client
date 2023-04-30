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
  TablePagination,
  Pagination,
  Box,
  CircularProgress,
} from "@mui/material";
import {
  VACCINATED_POPULATION,
  LOCKDOWN_POLICIES,
  MASK_POLICIES,
  VACCINE_POLICIES,
  POPULATION_DENSITY,
  EFFECTIVNESS,
} from "../utils/constants";
import { findLevel } from "../utils/findLevel";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

const CasesTable = () => {
  const { data: cases, isLoading, isError } = useGetCases();
  const [page, setPage] = useState(1);

  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return <div>Error</div>;
  }

  if (cases.length === 0) {
    return <div>No cases found</div>;
  }

  const pageSize = 10;
  const totalPages = Math.ceil(cases.length / pageSize);
  const data = cases?.slice((page - 1) * pageSize, page * pageSize);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <>
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
          stickyHeader
        >
          <TableHead>
            <TableRow>
              <TableCell variant="head">
                <b>Case ID</b>
              </TableCell>
              <TableCell align="right">
                <b>Start Date</b>
              </TableCell>
              <TableCell align="right">
                <b>End Date</b>
              </TableCell>
              <TableCell align="right">
                <b>City</b>
              </TableCell>
              <TableCell align="right">
                <b>Population</b>
              </TableCell>
              <TableCell align="right">
                <b>Population Density</b>
              </TableCell>
              <TableCell align="right">
                <b>Median Age</b>
              </TableCell>
              <TableCell align="right">
                <b>Problem Description</b>
              </TableCell>
              <TableCell align="right">
                <b>Number of Active Cases at Start</b>
              </TableCell>
              <TableCell align="right">
                <b>Number of Active Cases at End</b>
              </TableCell>
              <TableCell align="right">
                <b>Number of ICU Active Cases at Start</b>
              </TableCell>
              <TableCell align="right">
                <b>Number of ICU Active Cases at End</b>
              </TableCell>
              <TableCell align="right">
                <b>Number of Deaths at Start</b>
              </TableCell>
              <TableCell align="right">
                <b>Number of Deaths at End</b>
              </TableCell>
              <TableCell align="right">
                <b>Vaccinated Population</b>
              </TableCell>
              <TableCell align="right">
                <b>
                  Average Temperature (<sup>o</sup>C)
                </b>
              </TableCell>
              <TableCell align="right">
                <b>Average Humidity (%)</b>
              </TableCell>

              <TableCell align="right">
                <b>Infection Rate (%)</b>
              </TableCell>
              <TableCell align="right">
                <b>Mortality Rate (%)</b>
              </TableCell>
              <TableCell align="right">
                <b>Solution Description</b>
              </TableCell>
              <TableCell align="right">
                <b>Lockdown Policy</b>
              </TableCell>
              <TableCell align="right">
                <b>Mask Policy</b>
              </TableCell>
              <TableCell align="right">
                <b>Vaccination Policy</b>
              </TableCell>
              <TableCell align="right">
                <b>Solution Effectiveness</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.id}
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
                  {findLevel(
                    POPULATION_DENSITY,
                    row?.problem_population_density
                  )}
                </TableCell>
                <TableCell align="right">
                  {row?.problem_age_distribution}
                </TableCell>
                <TableCell align="right">
                  <Tooltip
                    title={
                      <ReactMarkdown>{row.problem_description}</ReactMarkdown>
                    }
                    disableInteractive
                  >
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
                <TableCell align="right">
                  {row.problem_average_temperature}
                </TableCell>
                <TableCell align="right">
                  {row.problem_average_humidity}%
                </TableCell>
                <TableCell align="right">
                  {row.problem_infection_rate}%
                </TableCell>
                <TableCell align="right">
                  {row.problem_mortality_rate}%
                </TableCell>
                <TableCell align="right">
                  <Tooltip
                    title={
                      <ReactMarkdown>{row.solution_description}</ReactMarkdown>
                    }
                    disableInteractive
                  >
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
                <TableCell align="right">
                  {findLevel(EFFECTIVNESS, row?.solution_effectiveness)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handleChangePage}
          color="primary"
          sx={{ mt: 2 }}
        />
      </div>
    </>
  );
};

export default CasesTable;
