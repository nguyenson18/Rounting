import { Box, Grid, Pagination } from "@mui/material";
import React, { useState } from "react";
import JobCard from "./JobCard";

const limit = 6;

function JobList({ jobsInfo }) {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const pageCount = Math.ceil(jobsInfo.length / limit);

  return (
    <>
      <Grid container spacing={2}>
        {jobsInfo &&
          jobsInfo
            .slice((page - 1) * limit, page * limit)
            .map((job) => <JobCard key={job.id} job={job} />)}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3, mb: 3 }}>
        <Pagination count={pageCount} page={page} onChange={handleChange} />
      </Box>
    </>
  );
}

export default JobList;
