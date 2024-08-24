import * as React from "react";
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Button,
  Grid,
  Avatar,
} from "@mui/material";
import LinearProgressWithLabel from "./LinearProgressWithLabel";
const ProjectCardComponent = ({
  projectName,
  type,
  projectDescription,
  createdAt,
  Team,
}) => {
  return (
    <Card sx={{ minWidth: 350, borderRadius: 10, padding: 2 }}>
      <CardHeader title={projectName} />
      <CardContent>
        <Typography
          sx={{
            backgroundColor: "#1976d2",
            color: "white",
            padding: "5px 10px",
            borderRadius: 1,
            display: "inline-block",
            fontSize: 12,
          }}
        >
          {type}
        </Typography>
        <Typography variant="body2" sx={{ paddingTop: "10px", color: "gray" }}>
          {projectDescription}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              Created:
            </Typography>
            <Typography variant="body2">{createdAt}</Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body2" >Team:</Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar sx={{ width: 24, height: 24 }} />
              <Avatar sx={{ width: 24, height: 24 }} />
              <Avatar sx={{ width: 24, height: 24 }} />
              <Typography variant="body2">+8</Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <LinearProgressWithLabel />
            <Typography variant="body2">Progress</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ProjectCardComponent;
