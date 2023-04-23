import React from "react";
import { Alert, AlertTitle, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";
const Recommendation = ({ data }) => {
  console.log(data);
  return (
    <Alert severity="success">
      <AlertTitle
        sx={{
          fontWeight: "bold",
        }}
      >
        Recommendation
      </AlertTitle>
      <ReactMarkdown>{data?.recommendation}</ReactMarkdown>
      <Typography sx={{ fontWeight: "bold" }}>Similar cases:</Typography>
      {data?.most_similar.map((item, index) => (
        <ReactMarkdown key={index}>{`Case ${
          index + 1
        }: ${item}`}</ReactMarkdown>
      ))}
    </Alert>
  );
};

export default Recommendation;
