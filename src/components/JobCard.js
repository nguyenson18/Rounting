import React from "react";
import { Chip, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useLocation, useNavigate } from "react-router-dom";

function JobCard({ job }) {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Grid item xs={12} md={4}>
      <Card sx={{ minWidth: 275, minHeight: 250, position: "relative" }}>
        <CardContent>
          <Typography
            sx={{
              fontSize: 16,
              mb: 1,
              borderBottom: 1,
              textAlign: "center",
            }}
            color="text.secondary"
            gutterBottom
            noWrap
          >
            {job.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {job.description.length > 120
              ? `${job.description.slice(0, 120)}...`
              : job.description}
          </Typography>
          {job.skills.slice(0, 4).map((skill, index) => (
            <Chip
              key={index}
              label={skill}
              sx={{
                mr: 1,
                mb: 1,
                backgroundColor: "#F0534A",
                color: "white",
                height: 28,
                fontSize: 13,
              }}
            />
          ))}
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            size="small"
            variant="contained"
            sx={{
              position: "absolute",
              bottom: 12,
              bgcolor: "#FC9918",
              color: "#000",
              fontSize: 12,
            }}
            to={`/jobs/${job.id}`}
            onClick={() => navigate(`/jobs/${job.id}`)}
            state={{ backgroundLocation: location }}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default JobCard;
